// import { Component } from "react";
import "./card.styles.css";

/* Class component */
// class Card extends Component {
//   render() {
//     // console.log("render Card");
//     const { id, name, email } = this.props.monster;
//     return (
//       <div className="card-container">
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set4&size=180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

/* Functional component */
const Card = (props) => {
  const { id, name, email } = props.monster;
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
