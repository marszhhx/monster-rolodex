import { Component } from "react";

class SearchBox extends Component {
  render() {
    // this.props;
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
