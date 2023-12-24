import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  test('renders header with links', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );

    // Test that the logo is rendered
    expect(screen.getByAltText('Logo')).toBeInTheDocument();

    // Test that each navigation link is present
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Schedule/i)).toBeInTheDocument();
    expect(screen.getByText(/Classes/i)).toBeInTheDocument();
});
});