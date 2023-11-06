import { render, screen } from '@testing-library/react';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import Intro from './Intro';

test('renders learn react link', () => {
  render(
     <BrowserRouter>
       <Intro />
     </BrowserRouter>
  );
 
  const linkElement = screen.getByText(/This is Home page/i);
  expect(linkElement).toBeInTheDocument();
 });