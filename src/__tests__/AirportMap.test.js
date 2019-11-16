import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AirportMap from '../components/AirportMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AirportMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<AirportMap /> with no props', () => {
  const container = shallow(<AirportMap />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  })
})
