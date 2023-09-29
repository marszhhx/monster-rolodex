// import { Component } from "react";

import { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

/* Functional component method */
const App = () => {
  const [searchField, setSearchField] = useState(""); // array of 2 values, [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    console.log("effect fired");
    fetch("https://jsonplaceholder.typicode.com/users") // asynchronous
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Cats rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"Search Monsters"}
        className={"search-box"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/* Class component method 

class App extends Component {
  // set initial state(data)
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor");
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  // render state in certain format
  render() {
    // console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Cats rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={"Search Monsters"}
          className={"search-box"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  // get state(data) from API call
  componentDidMount() {
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users") // asynchronous
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
}

*/

export default App;
