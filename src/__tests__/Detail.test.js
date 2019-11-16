import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import Detail from '../components/Detail';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router>
            <Detail />
        </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
})

describe('<Detail /> with no props', () => {
    const container = shallow(
        <Router>
            <Detail />
        </Router>
    );
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    }),
    it('able to find an html element', () => {
        expect(container.find('h2').length).toBe(0);
        expect(container.find('p').length).toBe(0);
    })
})