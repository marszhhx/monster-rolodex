import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: "123#!@SDF",
          name: "Linda",
        },
        {
          id: "$!@$Vasdf",
          name: "Frank",
        },
        {
          id: "cadsf523",
          name: "Jacky",
        },
        {
          id: "casdftgvv1",
          name: "Mars",
        },
      ],
    };
  }

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
