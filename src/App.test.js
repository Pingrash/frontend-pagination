import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component Renders', () => {
  it('Renders without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
