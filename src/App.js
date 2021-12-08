import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { OrderProvider } from './context/OrderContext';
import GlobalStyle from './styles/globalStyles';

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Pages/Main/Main'
import TakeOrder from './components/Pages/TakeOrder/TakeOrder'
import KitchenList from './components/Pages/Orders/KitchenList';
import WaiterOrders from './components/Pages/Orders/WaiterOrders';
import Menu from './components/Pages/Menu/Menu'
import ReadyOrders from './components/Pages/Orders/ReadyOrders'


const Page = styled.body`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
`

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <OrderProvider>
        <Page>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/takeOrder" element={<TakeOrder/>} />
            <Route path="/orders" element={<WaiterOrders/>}/>
            <Route path="/readyOrders" element={<ReadyOrders/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/kitchenList" element={<KitchenList/>}/>
          </Routes>
          <Footer/>
        </Page>
      </OrderProvider>
    </Router>
  );
}

export default App;
