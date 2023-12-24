import axios from 'axios';
import LoginPage from '../pages/LoginPage.jsx';
import { render, fireEvent, waitFor } from '@testing-library/react';
jest.mock('axios'); // Mock axios module

describe('LoginPage', () => {
  //test on handle submit
  test('handle login submit', async () => {
    // Mock axios post method 
    axios.post.mockResolvedValue({ data: { username: "usertest", email: "test@email.com", password: "testpassword" } });


    
  });
});
