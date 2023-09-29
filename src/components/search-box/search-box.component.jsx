// import { Component } from "react";
import "./search-box.styles.css";

/* Class Component */
// class SearchBox extends Component {
//   render() {
//     // this.props;
//     return (
//       <input
//         className={this.props.className}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

/* Functional Component */

const SearchBox = (props) => {
  const { className, placeholder, onChangeHandler } = props;
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
