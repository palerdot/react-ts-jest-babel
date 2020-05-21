import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import styles from './custom-style.scss';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(styles).toBeDefined();
  expect(linkElement).toBeInTheDocument();
});
