import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client"; // helps to inject the data to the application recieved from the server
import "./App.css";

import BookList from "./components/BookList";

//setting up the apollo client

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Bookworm</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
