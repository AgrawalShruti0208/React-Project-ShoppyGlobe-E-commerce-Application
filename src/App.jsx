import './App.css'

import { Header } from './components/Header'
import {Outlet} from "react-router-dom"
import {Provider} from "react-redux"

//REDUX Store
import { Products_ReduxStore } from './utils/Products_ReduxStore'


function App() {
  

  return (
    <>
    {/* Wrapping up all the components inside Provider functionality to share created REDUX STORE among all the components */}
      <Provider store={Products_ReduxStore} >
        <Header />
        <Outlet/>
      </Provider>
    </>
  )
}

export default App
