import '@testing-library/jest-dom';
import App from './app';
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

const onlyMessagesState = {
  messages: {
    messages: messages,
  },
  members: {
    members: [],
  },
};
const onlyMembersState = {
  messages: {
    messages: [],
  },
  members: {
    members: members,
  },
};

describe('App', () => {
  test('renders correct heading', () => {
    const { getByText } = renderWithProviders(<App />, {
      reduxState: loadedState,
    });
    expect(getByText(/Welcome to the NOW TV test!/i)).toBeInTheDocument();
  });
  test('renders Loading when neither members nor messages are loaded', () => {
    const { getByText } = renderWithProviders(<App />, {
      reduxState: initialState,
    });
    expect(getByText(/Loading/i)).toBeInTheDocument();
  });
  test('does not render button when neither members nor messages are loaded', () => {
    const { queryByText } = renderWithProviders(<App />, {
      reduxState: initialState,
    });
    expect(queryByText(/Sort descending/i)).toBeNull();
  });
  test('renders Loading when only messages are loaded', () => {
    const { getByText } = renderWithProviders(<App />, {
      reduxState: onlyMessagesState,
    });
    expect(getByText(/Loading/i)).toBeInTheDocument();
  });
  test('does not render button when only messages are loaded', () => {
    const { queryByText } = renderWithProviders(<App />, {
      reduxState: onlyMessagesState,
    });
    expect(queryByText(/Sort descending/i)).toBeNull();
  });
  test('renders Loading when only members are loaded', () => {
    const { getByText } = renderWithProviders(<App />, {
      reduxState: onlyMembersState,
    });
    expect(getByText(/Loading/i)).toBeInTheDocument();
  });
  test('does not render button when only members are loaded', () => {
    const { queryByText } = renderWithProviders(<App />, {
      reduxState: onlyMembersState,
    });
    expect(queryByText(/Sort descending/i)).toBeNull();
  });
  test('does not render Loading when messages and members are loaded', () => {
    const { queryByText } = renderWithProviders(<App />, {
      reduxState: loadedState,
    });
    expect(queryByText(/Loading/i)).not.toBeInTheDocument();
  });
  test('renders button when members and messages are loaded', () => {
    const { queryByText } = renderWithProviders(<App />, {
      reduxState: loadedState,
    });
    expect(queryByText(/Sort descending/i)).toBeInTheDocument();
  });
});
