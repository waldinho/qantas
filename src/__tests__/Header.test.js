import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<Header /> with no props', () => {
  const container = shallow(<Header />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  })
})
