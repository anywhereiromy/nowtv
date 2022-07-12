import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initialState, createRootReducer } from '../reducers';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const renderWithProviders = (ui, { reduxState } = {}) => {
  const store = createStore(createRootReducer({}), reduxState || initialState);
  return render(<Provider store={store}>{ui}</Provider>, { wrapper: BrowserRouter });
};

export default renderWithProviders;
