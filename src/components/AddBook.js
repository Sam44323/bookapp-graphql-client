import React, { Component } from "react";
import { flowRight as compose } from "lodash";
import { graphql } from "@apollo/client/react/hoc";

import styles from "../styles/AddBook.module.css";

import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../utils/queries/queries";

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
    const { bkname, genre, authorId } = this.state;
    this.props.addBookMutation({
      variables: {
        name: bkname,
        genre,
        authorId,
      },
      refetchQueries: [
        {
          query: getBooksQuery,
        },
      ],
    });
    this.setState({
      bkname: "",
      genre: "",
      authorId: "",
    });
  };

  authorOptions = () => {
    if (this.props.getAuthorsQuery.loading) {
      return;
    }
    return this.props.getAuthorsQuery.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };

  render() {
    return (
      <form id={styles.addBook}>
        <div className={styles.field}>
          <label>Book Name</label>
          <input
            type="text"
            value={this.state.bkname}
            onChange={(e) => this.changeValue("bkname", e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label>Genre</label>
          <input
            type="text"
            value={this.state.genre}
            onChange={(e) => this.changeValue("genre", e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label>Author</label>
          <select
            onChange={(e) => this.changeValue("authorId", e.target.value)}
          >
            <option value="">Select Authors</option>
            {this.authorOptions()}
          </select>
        </div>
        <button
          onClick={(e) => this.submitForm(e)}
          disabled={this.state.authorId === ""}
        >
          +
        </button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
