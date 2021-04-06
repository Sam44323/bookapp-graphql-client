import React, { Component } from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  authorOptions = () => {
    const data = this.props.data;
    if (data.loading) {
      return;
    }
    return data.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };
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
            <option>Select Authors</option>
            {this.authorOptions()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
