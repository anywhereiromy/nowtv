import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import messageReducer from './messagesReducer';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    messages: messageReducer,
  });
