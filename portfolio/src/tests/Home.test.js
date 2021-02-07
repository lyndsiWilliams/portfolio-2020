import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../components/Home';

describe('Home component', () => {
  it('renders the home component', () => {
    render(<Home />);
  });
});