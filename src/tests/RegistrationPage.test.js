import axios from 'axios';
import Registration from '../pages/RegistrationPage.jsx';
import { render } from '@testing-library/react';  // Import screen here
import { BrowserRouter, Route, Routes } from 'react-router-dom';

jest.mock('axios'); // Mock axios module

describe('Registration', () => {
  // Test on handle submit
  test('handle registration submit', async () => {
    // Mock axios post method 
    axios.post.mockResolvedValue({ data: { username: "usertest", email: "test@email.com", password: "testpassword" } });

    // checks if registration page renders correctly
    render(
      <BrowserRouter>
        <Routes>
            <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    );
  });
});
