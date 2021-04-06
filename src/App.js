import { ApolloClient } from "@apollo/client";
import { ApolloProvider, InMemoryCache } from "@apollo/client"; // helps to inject the data to the application recieved from the server
import "./App.css";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

//setting up the apollo client

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Bookworm</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
