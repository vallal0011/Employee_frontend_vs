import { render, screen } from '@testing-library/react';
import App from './App';

import Intro from './Intro';

test('renders learn react link', () => {
  render(<Intro />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
