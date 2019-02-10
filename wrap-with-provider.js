import React, {Fragment} from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import {StripeProvider} from 'react-stripe-elements';

import store from './src/redux/store'
import client from './src/apollo/client'

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  // const store = createStore()
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <StripeProvider apiKey={process.env.STRIPE_API_KEY}>
          {element}
        </StripeProvider>
      </ApolloProvider>
    </Provider>
    )
}