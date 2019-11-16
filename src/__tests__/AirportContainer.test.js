import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AirportContainer from '../containers/AirportContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AirportContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<AirportContainer /> with no props', () => {
  const container = shallow(<AirportContainer />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  })
})
