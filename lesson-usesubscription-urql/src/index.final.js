import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.final'
import {SubscriptionClient} from 'subscriptions-transport-ws'
import {
  Provider,
  createClient,
  defaultExchanges,
  subscriptionExchange,
} from 'urql'

const subscriptionClient = new SubscriptionClient(
  'ws://egghead-hasura.herokuapp.com/v1alpha1/graphql',
  {},
)

const client = createClient({
  url: 'https://egghead-hasura.herokuapp.com/v1alpha1/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
})

ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
