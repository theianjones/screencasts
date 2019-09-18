import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createClient, Provider} from 'urql'

const client = createClient({
  url: 'https://countries.trevorblades.com/',
})

ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
