import React, { useState, useEffect } from "react";
import RestAPI from "../api/RestAPI";
import SearchResults from "./SearchResults";
import "./Search.css";

function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const response = async () => {
      const res = await RestAPI.get("search/", {
        params: {
          q: term,
        },
      });
      setResults(res.data);
      console.log(res);
    };
    // response();

    // if term and results already exists, then run response()
    if (term && results.length) {
      response();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          response();
        }
      }, 1000);

      // useEffect clearout function
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  // event handler for input element
  const handleChange = (e) => {
    setTerm(e.target.value);
    // console.log(e.target.value);
  };
  let label = term.length === 0 ? "Search" : "";
  return (
    <div>
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form1">
            {label}
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="results">
        <SearchResults results={results} term={term} />
      </div>
    </div>
  );
}

export default Search;
