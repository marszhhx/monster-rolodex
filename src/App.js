import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // set initial state(data)
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log("constructor");
  }

  // get state(data) from API call
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users") // asynchronous
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  // render state in certain format
  render() {
    console.log("render");
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log(event.target.value);
            const searchField = event.target.value.toLowerCase();
            this.setState(
              () => {
                return { searchField };
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
