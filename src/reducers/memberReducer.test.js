import { MemberActionTypes } from './memberActions';
import membersReducer, { membersInitialState } from './membersReducer';

const testMembers = [
  {
    id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
    firstName: 'Martin',
    lastName: 'Bradley',
    email: 'mbradley0@google.it',
    avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    ip: '166.124.172.160',
  },
  {
    id: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
    firstName: 'Helen',
    lastName: 'Hawkins',
    email: 'hhawkins1@posterous.com',
    avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    ip: '179.239.189.173',
  },
];

describe('membersReducer', () => {
  it('sets state to initial state if state is undefined', () => {
    const action = { type: MemberActionTypes.LoadMembers, payload: testMembers };
    const result = membersReducer(undefined, action);
    expect(result.members).toEqual([]);
    expect(result.loading).toEqual(true);
    expect(result.error).toEqual(false);
  });
  it('returns state if action does not match any case in reducer', () => {
    const initialState = membersInitialState;
    const action = { type: 'not a type' };
    const result = membersReducer(initialState, action);
    expect(result.members).toEqual([]);
    expect(result.loading).toEqual(false);
    expect(result.error).toEqual(false);
  });
  it('turns loading to true when lading members', () => {
    const initialState = membersInitialState;
    const action = { type: MemberActionTypes.LoadMembers };
    const result = membersReducer(initialState, action);
    expect(result.members).toEqual([]);
    expect(result.loading).toEqual(true);
    expect(result.error).toEqual(false);
  });
  it('adds loaded members to members key', () => {
    const initialState = membersInitialState;
    const expectedMembers = testMembers;
    const action = { type: MemberActionTypes.MembersLoaded, payload: expectedMembers };
    const result = membersReducer(initialState, action);
    expect(result.members).toEqual(expectedMembers);
    expect(result.loading).toEqual(false);
    expect(result.error).toEqual(false);
  });
  it('adds empty members to members key, if no loaded members', () => {
    const initialState = membersInitialState;
    const expectedMembers = [];
    const action = { type: MemberActionTypes.MembersLoaded, payload: expectedMembers };
    const result = membersReducer(initialState, action);
    expect(result.members).toEqual(expectedMembers);
    expect(result.loading).toEqual(false);
    expect(result.error).toEqual(false);
  });
  it('persists members and turns error to true when members fail to load', () => {
    const initialState = membersInitialState;
    const expectedMembers = [];
    const action = { type: MemberActionTypes.MemberLoadingFailed };
    const result = membersReducer(initialState, action);
    expect(result.members).toEqual(expectedMembers);
    expect(result.loading).toEqual(false);
    expect(result.error).toEqual(true);
    const initialStateWithMembers = {
      loading: true,
      members: testMembers,
      error: false,
    };
    const failedAction = { type: MemberActionTypes.MemberLoadingFailed };
    const failedResult = membersReducer(initialStateWithMembers, failedAction);
    expect(failedResult.members).toEqual(testMembers);
    expect(failedResult.loading).toEqual(false);
    expect(failedResult.error).toEqual(true);
  });
});
