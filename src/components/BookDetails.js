import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { getBookQuery } from "../utils/queries/queries";

class BookDetails extends Component {
  render() {
    return (
      <div id="book-details">
        <p>Book Details</p>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails);
