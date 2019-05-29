import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.start'
import {SubscriptionClient} from 'subscriptions-transport-ws'
import {
  createClient,
  Provider,
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
