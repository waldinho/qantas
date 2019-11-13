import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import ListContainer from '../containers/ListContainer';
import DetailContainer from '../containers/DetailContainer';
import { getAirports } from '../api/getAirports';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
`;

function App() {
  const [airports, setairports] = useState([]);
  const [loading, setloading] = useState(true);
  const [hasError, sethasError] = useState(false);
  useEffect(() => {
    getAirports().then(res => res.json())
    .then((data) => {
      setairports(data)
      setloading(false)
    })
    .catch(() => {
      sethasError(true)
      console.log("Oops something went wrong...")
    });
  }, [])
  const errorMessage = hasError ? <p aria-label="loading">Oops something went wrong...</p> : ''
  const nonSuccess = loading ? <p aria-label="loading">Loading...</p> : errorMessage
  const mapAirports = airports.map((item, i)=>{
    return <Route key={i} path={item.airportName} render={props => (<DetailContainer {...props} content={airports}/>)}/>
  })
  console.log('mapAirports: ', mapAirports)
  return (
    <>
    <header className="App-header">
    </header>
    <Wrapper>
        {
        loading ? nonSuccess
        : 
            <Switch>
                <Route exact path="/" render={props => 
                (<ListContainer {...props} content={airports}/>)
                }/>
                {mapAirports}
            </Switch>
        }
    </Wrapper>
    </>
  );
}

export default App;