import React from 'react'
import ReactDOM from 'react-dom'
import {createClient, defaultExchanges, Provider} from 'urql'
import {devtoolsExchange} from '@urql/devtools'
import Courses from './App'
const client = createClient({
  url: 'https://egghead-hasura.herokuapp.com/v1alpha1/graphql',
  exchanges: [devtoolsExchange, ...defaultExchanges],
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
