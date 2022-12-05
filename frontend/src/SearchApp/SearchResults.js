import React from "react";

function SearchResults({ results, term }) {
  if (term.length === 0) {
    return;
  } else if (results.length === 0) {
    return <div className="not-found">Searching</div>;
  } else {
    const res = results.map((result) => {
      return (
        <div key={result.title} className="result">
          {result.description} -- <b>{result.title}</b>
        </div>
      );
    });
    return <div>{res}</div>;
  }
}

export default SearchResults;
