import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-client"
import { InMemoryCache, defaultDataIdFromObject } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { onError } from "apollo-link-error"
import { ApolloLink } from "apollo-link"

import App from "components/App"

const link = ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      )
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  }),
  new HttpLink({
    uri: 'http://localhost:8080/graphql',
    credentials: 'same-origin'
  })
])

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case 'blocks': return object.key
      default: return defaultDataIdFromObject(object)
    }
  }
})

const client = new ApolloClient({
  link,
  cache
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  , div)
  ReactDOM.unmountComponentAtNode(div)
})
