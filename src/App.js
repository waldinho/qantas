  
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import styled from 'styled-components'

import AirportContainer from "./containers/AirportContainer";

const AppWrapper = styled.div`
  text-align: center;
`
const App = () => (
 <Router>
    <>
      <AppWrapper>
        <AirportContainer />
      </AppWrapper>
    </>
 </Router>
);

export default App;
