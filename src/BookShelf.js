import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  render() {
    const { details } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{details.status}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
