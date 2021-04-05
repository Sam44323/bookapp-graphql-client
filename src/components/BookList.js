import React, { Component } from "react";
import { gql } from "@apollo/client";

//creating a graphql query

const getBooksQuery = gql`
  {
    books {
      name
      id
      genre
    }
  }
`;

class BookList extends Component {
  render() {
    return (
      <div>
        <ul id="book-list">
          <li>Book Name</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
