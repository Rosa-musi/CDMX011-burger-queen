import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { OrderProvider } from './context/OrderContext';

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Pages/Main/Main'
import TakeOrder from './components/Pages/TakeOrder/TakeOrder'


const Page = styled.body`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
`

function App() {
  return (
    <Router>
      <OrderProvider>
        <Page>
          <Header/>
          {/* <Main/> */}
          <TakeOrder/>
          <Footer/>
        </Page>
      </OrderProvider>
    </Router>
    
  );
}

export default App;
