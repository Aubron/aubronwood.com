import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { configure, shallow,  mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('<Main />',() => {
  it('should contain the CSS Baseline reset', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('WithStyles(CssBaseline)').length).toBe(1);
  })
  it('should initialize the BrowserRouter', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('BrowserRouter').length).toBe(1);
  })
  it('matches the snapshot', () => {
    const tree = shallow(<Main />);
    expect(tree).toMatchSnapshot();
  })
})
