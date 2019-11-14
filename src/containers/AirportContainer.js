import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import ListContainer from '../containers/ListContainer';
import DetailContainer from '../containers/DetailContainer';
import { getAirports } from '../api/getAirports';

const Wrapper = styled.div`
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -25px;
  }
`;

function AppContainer() {
  const [airports, setAirports] = useState([])
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    getAirports().then(res => res.json())
    .then((data) => {
      setAirports(data)
      setLoading(false)
    })
    .catch(() => {
      setHasError(true)
      console.log('Oops something went wrong...')
    });
  }, [])
  const errorMessage = hasError ? <p aria-label='loading'>Oops something went wrong...</p> : ''
  const nonSuccess = loading ? <div className='loader'><Loader type="Oval" color="#e40000" height={50} width={50} /></div> : errorMessage
  console.log('airports: ', airports)
  return (
    <>
    <header className='App-header'>
    </header>
    <Wrapper>
        {
        loading ? nonSuccess
        : 
            <Switch>
                <Route exact path='/' render={props => 
                (<ListContainer {...props} content={airports}/>)
                }/>
                { airports.map((item, i)=>{
                  const url = item.airportName.replace(/\s/g, '-').toLowerCase()
                  return <Route key={i} path={`/${url}`} render={props => (<DetailContainer {...props} content={item}/>)}/>
                })}
            </Switch>
        }
    </Wrapper>
    </>
  );
}

export default AppContainer;