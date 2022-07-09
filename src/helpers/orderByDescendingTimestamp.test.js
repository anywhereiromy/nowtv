import { orderByDescendingTimestamp } from './orderByDescendingTimestamp';

const testMessages = [
  {
    id: 'id123',
    message: 'IamAmessage',
    userId: 'userId123',
    timestamp: '2017-02-09T04:27:38Z',
  },
  {
    id: 'id456',
    message: 'IamAalsoAmessage',
    userId: 'userId456',
    timestamp: '2016-09-15T05:04:58Z',
  },
  {
    id: 'id456',
    message: 'IamAalsoAmessage',
    userId: 'userId456',
    timestamp: '2016-11-09T05:04:58Z',
  },
];

describe('orderByDescendingTimestamp', () => {
  it('sorts messages be descending timestamp (newest to oldest)', () => {
    const expectedOrder = [
      {
        id: 'id123',
        message: 'IamAmessage',
        userId: 'userId123',
        timestamp: '2017-02-09T04:27:38Z',
      },
      {
        id: 'id456',
        message: 'IamAalsoAmessage',
        userId: 'userId456',
        timestamp: '2016-11-09T05:04:58Z',
      },
      {
        id: 'id456',
        message: 'IamAalsoAmessage',
        userId: 'userId456',
        timestamp: '2016-09-15T05:04:58Z',
      },
    ];
    const result = orderByDescendingTimestamp(testMessages);
    expect(result).toEqual(expectedOrder);
  });
});
