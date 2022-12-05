import React from "react";

class SearchBar extends React.Component {
  state = { word: "" };

  OnFormSubmit = (e) => {
    // form submit callback handler
    e.preventDefault();
    this.props.onSubmit(this.state.word); // passing word into parent comp.
  };

  onInputChange = (e) => {
    //when input element value changes update the state
    this.setState({ word: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.OnFormSubmit}>
          <input
            type="text"
            value={this.state.word}
            // onChange = {(e) => this.setState({ word: e.target.value })}
            onChange={this.onInputChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
