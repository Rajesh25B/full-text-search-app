import React from "react";

import "./SearchList.css";

const SearchResults = (props) => {
  const res = props.results.map(({ title, description }) => {
    return (
      <div key={title}>
        {description}-by--
        <b>
          <i>{title}</i>
        </b>
      </div>
    );
  });
  return <div className="special">{res}</div>;
};

export default SearchResults;
