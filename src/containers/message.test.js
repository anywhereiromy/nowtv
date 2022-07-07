import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Message from './message';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders correct message', () => {
  act(() => {
    render(<Message />, container);
  });
  expect(container.textContent).toBe('');

  act(() => {
    render(<Message message="IamAmessage" />, container);
  });
  expect(container.textContent).toBe('IamAmessage');

  act(() => {
    render(<Message message="Message2" />, container);
  });
  expect(container.textContent).toBe('Message2');
});
