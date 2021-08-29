import React from 'react';
import Title from './components/title';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Title component', () => {
  const tree = renderer.create(<Title />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('nullish operator assignment should work', () => {
  const a: Record<string, number> = { duration: 50 };

  expect( a.speed ??= 25).toEqual(25);
});
