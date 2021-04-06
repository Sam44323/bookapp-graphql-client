import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";

import { getBooksQuery } from "../utils/queries/queries";
import BookDetails from "./BookDetails";

class BookList extends Component {
  displayBooks = () => {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map((book) => <li key={book.id}>{book.name}</li>);
    }
  };
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
