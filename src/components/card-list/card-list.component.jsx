import { Component } from "react";
import "./card-list.styles.css";
import Card from "./card/card.component";

class CardList extends Component {
  render() {
    // console.log(this.props);
    console.log("render CardList");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <Card
              className={"card-container"}
              id={id}
              name={name}
              email={email}
              key={id}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
