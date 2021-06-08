import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  const container = render(<App />);
  screen.getByRole('banner')

});
