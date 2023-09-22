import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // set initial state(data)
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  // get state(data) from API call
  componentDidMount() {
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
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
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
