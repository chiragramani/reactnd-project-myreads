import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Book extends PureComponent {
  static propTypes = {
    book: PropTypes.object.isRequired,
    didChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const book = this.props.book;
    const { title, authors, imageLinks, shelf } = book;
    const thumbnail = imageLinks ? imageLinks.thumbnail || "" : "";
    const authorsString = (authors || [""]).join(", ");
    const currentShelf = shelf || "none";
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={currentShelf}
              onChange={e => {
                e.preventDefault();
                this.props.didChangeShelf(book, e.target.value);
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authorsString}</div>
      </div>
    );
  }
}

export default Book;
