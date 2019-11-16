import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

import App from '../App';
import ListContainer from '../containers/ListContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const dummyObj = [
  {
    airportCode:"AAA",
    internationalAirport:false,
    domesticAirport:false,
    regionalAirport:false,
    onlineIndicator:false,
    eticketableAirport:false,
    location:
      {
        aboveSeaLevel:-99999,
        latitude:17.25,
        latitudeRadius:-0.3040,
        longitude:145.30,longitudeRadius:-2.5395,
        latitudeDirection:"S",
        longitudeDirection:"W"
      },
    airportName:"Anaa",
    city:
      {
        cityCode:"AAA",
        cityName:"Anaa",
        timeZoneName:"Pacific/Tahiti"},
        country:{
          countryCode:"PF",
          countryName:"French Polynesia"
        },
        region:{
          regionCode:"SP",
          regionName:"South Pacific"
        }
      }
]

describe('<ListContainer /> with props', () => {
  const container = shallow(
    <Router>
      <ListContainer 
      content={dummyObj} />
    </Router>
  );
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  })
})
