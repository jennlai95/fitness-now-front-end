import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Schedule from '../pages/SchedulePage';
import { BrowserRouter } from 'react-router-dom';

describe('Schedule Component', () => {
    test('renders schedule component', () => {
      render(
        <BrowserRouter>
      <Schedule />
        </BrowserRouter>
      );
    });
});