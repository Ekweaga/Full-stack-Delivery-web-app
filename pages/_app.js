
import '../styles/globals.css'
import Layout from './Components/layout'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from "../Redux/store"
import store from "../Redux/store"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <Layout> 
      <Component {...pageProps} /></Layout>
      </PersistGate>
      </Provider>
  )
 
 
 
}

export default MyApp
