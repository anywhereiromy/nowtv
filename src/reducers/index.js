import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import messageReducer from './messages/messagesReducer';
import memberReducer from './members/membersReducer';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    messages: messageReducer,
    members: memberReducer,
  });
