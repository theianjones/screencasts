import React from 'react'
import ReactDOM from 'react-dom'
import {
  Client,
  dedupExchange,
  fetchExchange,
  cacheExchange,
  Provider,
} from 'urql'
import Courses from './App'

const client = new Client({
  url: 'https://egghead-hasura.herokuapp.com/v1alpha1/graphql',
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
  requestPolicy: 'cache-and-network',
})

function App() {
  return (
    <Provider value={client}>
      <Courses />
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
