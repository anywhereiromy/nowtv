import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { getHumanReadableDateTime } from '../helpers/getHumanReadableDateTime';
import Message from './message';

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

describe('Message', () => {
  it('renders correct message text', () => {
    render(<Message message={testMessage} member={testMember} />, { wrapper: BrowserRouter });
    expect(screen.getByText(testMessage.message)).toBeInTheDocument();

    render(<Message message={testMessageTwo} member={testMemberTwo} />, { wrapper: BrowserRouter });
    expect(screen.getByText(testMessageTwo.message)).toBeInTheDocument();
  });
  it('renders correct timestamp', () => {
    render(<Message message={testMessage} member={testMember} />, { wrapper: BrowserRouter });
    const parsedTimestamp = getHumanReadableDateTime(testMessage.timestamp);
    expect(screen.getByText(parsedTimestamp)).toBeInTheDocument();
    render(<Message message={testMessageTwo} member={testMemberTwo} />, { wrapper: BrowserRouter });
    const parsedTimestampTwo = getHumanReadableDateTime(testMessageTwo.timestamp);
    expect(screen.getByText(parsedTimestampTwo)).toBeInTheDocument();
  });
  it('renders correct name', () => {
    render(<Message message={testMessage} member={testMember} />, { wrapper: BrowserRouter });
    expect(screen.getByText(`${testMember.firstName} ${testMember.lastName}`)).toBeInTheDocument();
    render(<Message message={testMessageTwo} member={testMemberTwo} />, { wrapper: BrowserRouter });
    expect(screen.getByText(`${testMemberTwo.firstName} ${testMemberTwo.lastName}`)).toBeInTheDocument();
  });
});
