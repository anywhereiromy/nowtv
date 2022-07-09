export const defaultMember = { id: '', email: '' };

export const findMemberById = (members, userId) => {
  const memberOptional = members.find((member) => member.id === userId);
  return memberOptional ? memberOptional : defaultMember;
};
