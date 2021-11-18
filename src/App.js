import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body/Body'


const Page = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
`

function App() {
  return (
    <Router>
      <Page>
        <Header/>
        <Body/>
        <Footer/>
      </Page>
    </Router>
    
  );
}

export default App;
