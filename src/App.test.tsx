import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const rendered = Enzyme.shallow(<App/>);
  expect(rendered).toMatchSnapshot();
});
