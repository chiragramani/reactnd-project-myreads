import React from "react";
import { Route } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import SearchBar from "./SearchBar";
import ListBooks from "./ListBooks";
import OpenSearch from "./OpenSearch";
import "./App.css";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={({ history }) => (
            <div>
              <ListBooks />
              <OpenSearch
                didTapOnSearch={e => {
                  e.preventDefault();
                  history.push("/search");
                }}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <SearchBar
              didTapOnBack={e => {
                e.preventDefault();
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
