import { loadingMessages, messagesLoaded, messageLoadingFailed } from "./messageActions";
import { messageActionTypes } from './messageActions';

describe('loadingMessages', () => {
  it('returns object with correct type', () => {
    expect(loadingMessages().type).toBe(messageActionTypes.LoadMessages);
  });
});

describe('messagesLoaded', () => {
  it('returns object with correct type and payload', () => {
    const expectedMessages = [
      {
        id: '12345',
      },
      {
        id: '123456789',
      },
    ];
    const result = messagesLoaded(expectedMessages);
    expect(result.type).toBe(messageActionTypes.MessagesLoaded);
    expect(result.payload).toEqual(expectedMessages);
  });
});

describe('messageLoadingFailed', () => {
  it('returns object with correct type', () => {
    expect(messageLoadingFailed().type).toBe(messageActionTypes.MessageLoadingFailed);
  });
});
