export const MemberActionTypes = {
  LoadMembers: 'LoadMembers',
  MembersLoaded: 'MembersLoaded',
  MemberLoadingFailed: 'MemberLoadingFailed',
};

export const loadingMembers = () => ({ type: MemberActionTypes.LoadMembers });
export const membersLoaded = (members) => ({ type: MemberActionTypes.MembersLoaded, payload: members });
export const memberLoadingFailed = () => ({ type: MemberActionTypes.MemberLoadingFailed });
