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
