import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.final'
import {Provider, createClient} from 'urql'

const client = createClient({
  url: 'https://egghead-hasura.herokuapp.com/v1alpha1/graphql',
})

ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
