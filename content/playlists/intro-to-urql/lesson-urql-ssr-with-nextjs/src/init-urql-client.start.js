import { createClient } from 'urql';
import 'isomorphic-unfetch';

let urqlClient = null;

export default function initUrqlClient(initialState) {
  if (!process.browser || !urqlClient) {
    urqlClient = createClient({
      url: 'https://egghead.io/graphql',
    });
  }

  // Return both the cache and the client
  return [urqlClient];
}
