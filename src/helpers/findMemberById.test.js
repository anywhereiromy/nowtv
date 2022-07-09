import { findMemberById, defaultMember } from './findMemberById';

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

describe('findMemberById', () => {
  it('finds the correct member', () => {
    const result = findMemberById(testMembers, 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4');
    expect(result).toEqual(testMembers[1]);

    const resultTwo = findMemberById(testMembers, 'e837c9f5-247f-445f-bcc3-7d434348336b');
    expect(resultTwo).toEqual(testMembers[0]);
  });
  it('returns default member if no members match the id provided', () => {
    const result = findMemberById(testMembers, 'noMatch');
    expect(result).toEqual(defaultMember);
  });
});
