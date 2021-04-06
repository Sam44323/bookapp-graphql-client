import React, { Component } from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

//creating a graphql query

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label>Book Name</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author</label>
          <select>
            <option>Select Author</option>
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);