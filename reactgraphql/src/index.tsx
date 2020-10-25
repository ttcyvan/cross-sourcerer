import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink, InMemoryCache, ApolloClient, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const Linking :any = createHttpLink({
  uri:'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      authorization: `Bearer a2f9f7e010f674a2290f3979edba5e6a098620f2`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(Linking),
  cache: new InMemoryCache()
});


ReactDOM.render(

<React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
