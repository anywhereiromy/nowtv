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

const testMessage = {
  id: '8fe34649-702c-4e6b-8129-fa12d8341e91',
  userId: '0080f744-e793-4b5e-97ee-8e8413b6d452',
  message: 'Cras non velit nec nisi vulputate nonummy.',
  timestamp: '2016-03-08T20:11:54Z',
};

const testMessageTwo = {
  id: '702c-4e6b-8129-fa12d8341e91',
  userId: 'e793-4b5e-97ee-8e8413b6d452',
  message: 'vulputate nonummy.',
  timestamp: '2017-06-09T21:12:44Z',
};

const testMember = {
  id: '0080f744-e793-4b5e-97ee-8e8413b6d452',
  firstName: 'Denise',
  lastName: 'Sanders',
  email: 'dsanders2@ox.ac.uk',
  avatar: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
  ip: '184.19.42.78',
};

const testMemberTwo = {
  id: 'e793-4b5e-97ee-8e8413b6d452',
  firstName: 'Bernie',
  lastName: 'Sanderson',
  email: 'bsanders2@oxen.ac.uk',
  avatar: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
  ip: '183.19.42.78',
};

it('renders correct message', () => {
  // act(() => {
  //   render(<Message />, container);
  // });
  // expect(container.textContent).toBe('');

  act(() => {
    render(<Message message={testMessage} member={testMember} />, container);
  });
  expect(container.textContent).toBe('Cras non velit nec nisi vulputate nonummy.');

  act(() => {
    render(<Message message={testMessageTwo} member={testMemberTwo} />, container);
  });
  expect(container.textContent).toBe('vulputate nonummy.');
});
