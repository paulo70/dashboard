import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './dashboard';

test('renders learn react link', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
