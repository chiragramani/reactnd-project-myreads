import React from "react";
import PropTypes from "prop-types";

function OpenSearch(props) {
  return (
    <div className="open-search">
      <button onClick={props.didTapOnSearch}>
        Add a book
      </button>
    </div>
  );
}

OpenSearch.propTypes = {
  didTapOnSearch: PropTypes.func.isRequired
}

export default OpenSearch;
