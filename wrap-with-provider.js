import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

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
        {element}
      </ApolloProvider>
    </Provider>
    )
}