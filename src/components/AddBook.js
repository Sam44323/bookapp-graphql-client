import React, { Component } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "@apollo/client/react/hoc";

import { getAuthorsQuery, addBookMutation } from "../utils/queries/queries";

class AddBook extends Component {
  state = {
    bkname: "",
    genre: "",
    authorId: "",
  };

  changeValue = (name, value) => {
    const stateObj = { ...this.state };
    stateObj[name] = value;
    this.setState({ ...stateObj });
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  authorOptions = () => {
    if (this.props.data.loading) {
      return;
    }
    return this.props.data.authors.map((author) => (
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
          <input
            type="text"
            value={this.state.bkname}
            onChange={(e) => this.changeValue("bkname", e.target.value)}
          />
        </div>
        <div className="field">
          <label>Genre</label>
          <input
            type="text"
            value={this.state.genre}
            onChange={(e) => this.changeValue("genre", e.target.value)}
          />
        </div>
        <div className="field">
          <label>Author</label>
          <select
            onChange={(e) => this.changeValue("authorId", e.target.value)}
          >
            <option>Select Authors</option>
            {this.authorOptions()}
          </select>
        </div>
        <button onClick={(e) => this.submitForm(e)}>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
