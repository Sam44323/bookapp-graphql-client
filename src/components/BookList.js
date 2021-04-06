import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";

import styles from "../styles/BookList.module.css";
import { getBooksQuery } from "../utils/queries/queries";
import BookDetails from "./BookDetails";

class BookList extends Component {
  state = {
    bId: "",
  };

  displayBooks = () => {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map((book) => (
        <li key={book.id} onClick={() => this.setState({ bId: book.id })}>
          {book.name}
        </li>
      ));
    }
  };
  render() {
    return (
      <div>
        <ul id={styles.bookList}>{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.bId} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
