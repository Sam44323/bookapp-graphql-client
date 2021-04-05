import React, { Component } from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

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
    console.log(this.props);
    return (
      <div>
        <ul id="book-list">
          <li>Book Name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
