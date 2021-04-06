import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { getBookQuery } from "../utils/queries/queries";

import styles from "../styles/BookDetails.module.css";

class BookDetails extends Component {
  displayBooksData() {
    const book = this.props.data.book;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All Books by this author!</p>
          <ul className={styles.otherBooks}>
            {book.author.books.map((book) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No Book Selected...</div>;
    }
  }

  render() {
    return <div id={styles.bookDetails}>{this.displayBooksData()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId, // will refectch the book when the id in the props is changed
      },
    };
  },
})(BookDetails);
