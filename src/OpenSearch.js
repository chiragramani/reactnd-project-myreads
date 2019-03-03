import React from "react";

function OpenSearch(props) {
  return (
    <div className="open-search">
      <button onClick={props.didTapOnSearch}>
        Add a book
      </button>
    </div>
  );
}

export default OpenSearch;
