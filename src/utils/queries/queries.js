import { gql } from "@apollo/client";

// creating graphql queries

export const getBooksQuery = gql`
  {
    books {
      name
      id
      genre
    }
  }
`;

export const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const addBookMutation = gql`
  mutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`;
