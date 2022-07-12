import MessagePage from './messagePage';
import '@testing-library/jest-dom';
import members from '../data/members.json';
import messages from '../data/messages.json';
import React from 'react';
import { initialState } from '../reducers';
import renderWithProviders from '../helpers/renderWithProviders';

const loadedState = {
  messages: {
    messages: messages,
  },
  members: {
    members: members,
  },
};

describe('MessagePage', () => {
  test('renders back button when everything is loaded', () => {
    const { getByText } = renderWithProviders(<MessagePage />, {
      reduxState: loadedState,
    });
    expect(getByText(/Back/i)).toBeInTheDocument();
  });
  test('renders back button when neither members nor messages are loaded', () => {
    const { getByText } = renderWithProviders(<MessagePage />, {
      reduxState: initialState,
    });
    expect(getByText(/Back/i)).toBeInTheDocument();
  });
});
