import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import messageReducer from './messagesReducer';
import memberReducer from './membersReducer';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    messages: messageReducer,
    members: memberReducer,
  });
