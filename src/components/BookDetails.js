import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { getBookQuery } from "../utils/queries/queries";

class BookDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="book-details">
        <p>Book Details</p>
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetails);
