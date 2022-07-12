import { messageActionTypes } from './messageActions';
import messageReducer, { messagesInitialState } from './messagesReducer';

const testMessages = [
  {
    id: 'id123',
    message: 'IamAmessage',
    userId: 'userId123',
    timestamp: '123123123',
  },
  {
    id: 'id456',
    message: 'IamAalsoAmessage',
    userId: 'userId456',
    timestamp: '456789',
  },
];

describe('messageReducer', () => {
  it('sets state to initial state if state is undefined', () => {
    const action = { type: messageActionTypes.LoadMessages, payload: testMessages };
    const result = messageReducer(undefined, action);
    expect(result.messages).toEqual([]);
    expect(result.loading).toEqual(true);
    expect(result.error).toEqual(false);
  });
  it('returns state if action does not match any case in reducer', () => {
    const initialState = messagesInitialState;
    const action = { type: 'not a type' };
    const result = messageReducer(initialState, action);
    expect(result.messages).toEqual([]);
    expect(result.loading).toEqual(false);
    expect(result.error).toEqual(false);
  });
  it('turns loading to true when lading messages', () => {
    const initialState = messagesInitialState;
    const action = { type: messageActionTypes.LoadMessages };
    const result = messageReducer(initialState, action);
    expect(result.messages).toEqual([]);
    expect(result.loading).toEqual(true);
    expect(result.error).toEqual(false);
  });
  it('adds loaded messsages to messages key', () => {
    const initialState = messagesInitialState;
    const expectedMessages = testMessages;
    const action = { type: messageActionTypes.MessagesLoaded, payload: expectedMessages };
    const result = messageReducer(initialState, action);
    expect(result.messages).toEqual(expectedMessages);
    expect(result.loading).toEqual(false);
    expect(result.error).toEqual(false);
  });
  it('adds empty messsages to messages key, if no loaded messages', () => {
    const initialState = messagesInitialState;
    const expectedMessages = [];
    const action = { type: messageActionTypes.MessagesLoaded, payload: expectedMessages };
    const result = messageReducer(initialState, action);
    expect(result.messages).toEqual(expectedMessages);
    expect(result.loading).toEqual(false);
    expect(result.error).toEqual(false);
  });
  it('persists messages and turns error to true when messages fail to load', () => {
    const initialState = messagesInitialState;
    const expectedMessages = [];
    const action = { type: messageActionTypes.MessageLoadingFailed };
    const result = messageReducer(initialState, action);
    expect(result.messages).toEqual(expectedMessages);
    expect(result.loading).toEqual(false);
    expect(result.error).toEqual(true);
    const initialStateWithMessages = {
      loading: true,
      messages: testMessages,
      error: false,
    };
    const failedAction = { type: messageActionTypes.MessageLoadingFailed };
    const failedResult = messageReducer(initialStateWithMessages, failedAction);
    expect(failedResult.messages).toEqual(testMessages);
    expect(failedResult.loading).toEqual(false);
    expect(failedResult.error).toEqual(true);
  });
});
