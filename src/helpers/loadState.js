import { getMembers, getMessages } from '../data';
import { loadingMessages, messagesLoaded, messageLoadingFailed } from '../reducers/messages/messageActions';
import { loadingMembers, membersLoaded, memberLoadingFailed } from '../reducers/members/memberActions';

export const loadMembers = (dispatch) => {
  dispatch(loadingMembers());
  getMembers()
    .then((members) => {
      dispatch(membersLoaded(members));
    })
    .catch((err) => {
      console.error('Failed to load members with error: ', err);
      dispatch(memberLoadingFailed());
    });
};

export const loadMessages = (dispatch) => {
  dispatch(loadingMessages());
  getMessages()
    .then((messages) => {
      dispatch(messagesLoaded(messages));
    })
    .catch((err) => {
      console.error('Failed to load messages with error: ', err);
      dispatch(messageLoadingFailed());
    });
};
