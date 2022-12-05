import React from "react";

import RestAPI from "../api/RestAPI";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class App extends React.Component {
  state = { results: [] };

  onSearchSubmit = async (word) => {
    const result = await RestAPI("/api/search/", { params: { q: word } });
    console.log(result);
    this.setState({ results: result.data });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SearchResults results={this.state.results} word={this.state.word} />
      </div>
    );
  }
}

export default App;
