import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBar from "./SearchBar";
import ListBooks from "./ListBooks";
import OpenSearch from "./OpenSearch";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.fetchAllBooks();
  }

  fetchAllBooks = () => {
    BooksAPI.getAll()
      .then(books =>
        this.setState({
          books
        })
      )
      .catch(error => console.log(error));
  };

  didChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(this.fetchAllBooks)
      .catch(error => console.log(error));
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={({ history }) => (
            <div>
              <ListBooks books={books} didChangeShelf={this.didChangeShelf} />
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
              currentBooks={books}
              didChangeShelf={this.didChangeShelf}
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
