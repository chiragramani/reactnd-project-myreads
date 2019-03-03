import React, { PureComponent } from "react";
import { DebounceInput } from "react-debounce-input";
import PropTypes from "prop-types";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class SearchBar extends PureComponent {
  state = {
    query: "",
    books: []
  };

  static propTypes = {
    currentBooks: PropTypes.array.isRequired,
    didChangeShelf: PropTypes.func.isRequired,
    didTapOnBack: PropTypes.func.isRequired
  };

  updateShelves = books => {
    const { currentBooks } = this.props;
    for (let searchResult of books) {
      for (const currentBook of currentBooks) {
        if (searchResult.id === currentBook.id) {
          searchResult.shelf = currentBook.shelf;
        }
      }
    }
    return Promise.resolve(books);
  };

  didChangeText = e => {
    const enteredSearchText = e.target.value;
    this.setState({
      query: enteredSearchText
    });
    BooksAPI.search(enteredSearchText)
      .then(books => {
        const results = books.length > 0 ? books : [];
        return results;
      })
      .then(this.updateShelves)
      .then(books =>
        this.setState({
          books: books
        })
      )
      .catch(error => console.log(error));
  };

  render() {
    const { books } = this.state;
    const { value } = this.state.query;
    const { didChangeShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={this.props.didTapOnBack}>
            Close
          </button>
          <div className="search-books-input-wrapper">
            <DebounceInput
              placeholder="Search by title or author"
              minLength={1}
              value={value}
              debounceTimeout={300}
              onChange={this.didChangeText}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query &&
              books.map(book => (
                <li key={book.id}>
                  <Book book={book} didChangeShelf={didChangeShelf} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBar;
