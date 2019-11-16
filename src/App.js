  
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import styled from 'styled-components'

import AirportContainer from "./containers/AirportContainer";
import Header from "./components/Header";

const AppWrapper = styled.div`
  text-align: center;
`
const App = () => (
    <>
    <Router>
      <AppWrapper>
        <Header />
        <AirportContainer />
      </AppWrapper>
    </Router>
    </>
);

export default App;
