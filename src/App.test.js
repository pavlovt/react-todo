import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component test', () => {
  it('button text should be correct', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('input.add').text();
    expect(text).toBe('Add Todo');
  });
});