import { orderByAscendingTimestamp } from './orderByAscendingTimestamp';

const testMessages = [
  {
    id: 'id123',
    message: 'IamAmessage',
    userId: 'userId123',
    timestamp: '2017-02-09T04:27:38Z',
  },
  {
    id: 'id679',
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

describe('orderByAscendingTimestamp', () => {
  it('sorts messages be ascending timestamp (oldest to newest)', () => {
    const expectedOrder = [
      {
        id: 'id679',
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
      {
        id: 'id123',
        message: 'IamAmessage',
        userId: 'userId123',
        timestamp: '2017-02-09T04:27:38Z',
      },
    ];
    const result = orderByAscendingTimestamp(testMessages);
    expect(result[0].id).toBe(expectedOrder[0].id);
    expect(result[1].id).toBe(expectedOrder[1].id);
    expect(result[2].id).toBe(expectedOrder[2].id);
  });
  it('persists order if timestamps the same', () => {
    const sameOrderMessages = [
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
        timestamp: '2017-02-09T04:27:38Z',
      },
    ];
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
        timestamp: '2017-02-09T04:27:38Z',
      },
    ];
    const result = orderByAscendingTimestamp(sameOrderMessages);
    expect(result[0].id).toBe(expectedOrder[0].id);
    expect(result[1].id).toBe(expectedOrder[1].id);
  });
});
