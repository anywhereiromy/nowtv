import { MemberActionTypes, loadingMembers, membersLoaded, memberLoadingFailed } from './memberActions';

describe('loadingMembers', () => {
  it('returns object with correct type', () => {
    expect(loadingMembers().type).toBe(MemberActionTypes.LoadMembers);
  });
});

describe('membersLoaded', () => {
  it('returns object with correct type and payload', () => {
    const expectedMembers = [
      {
        id: '12345',
      },
      {
        id: '123456789',
      },
    ];
    const result = membersLoaded(expectedMembers);
    expect(result.type).toBe(MemberActionTypes.MembersLoaded);
    expect(result.payload).toEqual(expectedMembers);
  });
});

describe('memberLoadingFailed', () => {
  it('returns object with correct type', () => {
    expect(memberLoadingFailed().type).toBe(MemberActionTypes.MemberLoadingFailed);
  });
});
