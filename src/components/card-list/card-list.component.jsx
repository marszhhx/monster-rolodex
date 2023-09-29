// import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

/* Class component */
// class CardList extends Component {
//   render() {
//     // console.log(this.props);
//     console.log("render CardList");
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
