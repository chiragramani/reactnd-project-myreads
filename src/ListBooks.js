import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    didChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const { books } = this.props;
    const currentlyReadingBooks = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    const readBooks = books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              books={currentlyReadingBooks}
              didChangeShelf={this.props.didChangeShelf}
            />
            <BookShelf title="Want to read" books={wantToReadBooks} didChangeShelf={this.props.didChangeShelf}/>
            <BookShelf title="Read" books={readBooks} didChangeShelf={this.props.didChangeShelf}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
