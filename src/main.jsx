import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Components/redux/Store.jsx'
import ShopContextProvider from './Components/Context/ShopContext.jsx'
import { getTotals } from './Components/redux/CartSlice.jsx'

store.dispatch(getTotals())

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </Provider>

)
