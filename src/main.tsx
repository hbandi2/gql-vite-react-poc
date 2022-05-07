import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Pages } from "./pages";

// TODO: can be moved to its own file/folder as we progress
const TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_API_TOKEN;
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
  cache: new InMemoryCache(),
});

// Rendering root component in here
ReactDOM.render(
  <React.StrictMode>
    <main className="main-container">
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Pages />
      </ApolloProvider>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
