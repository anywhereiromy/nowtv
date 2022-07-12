import { MemberActionTypes } from '../reducers/members/memberActions';
import { messageActionTypes } from '../reducers/messages/messageActions';
import { loadMessages, loadMembers } from './loadState';

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('loadMembers', () => {
  it('dispatches correct loading action', () => {
    const dispatch = jest.fn();
    loadMembers(dispatch);
    expect(dispatch).toHaveBeenNthCalledWith(1, { type: MemberActionTypes.LoadMembers });
  });
});

describe('loadMessages', () => {
  it('dispatches correct loading action', () => {
    const dispatch = jest.fn();
    loadMessages(dispatch);
    expect(dispatch).toHaveBeenNthCalledWith(1, { type: messageActionTypes.LoadMessages });
  });
});
