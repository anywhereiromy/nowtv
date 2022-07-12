export const messageActionTypes = {
  LoadMessages: 'LoadMessages',
  MessagesLoaded: 'MessagesLoaded',
  MessageLoadingFailed: 'MessageLoadingFailed',
};

export const loadingMessages = () => ({ type: messageActionTypes.LoadMessages });
export const messagesLoaded = (messages) => ({ type: messageActionTypes.MessagesLoaded, payload: messages });
export const messageLoadingFailed = () => ({ type: messageActionTypes.MessageLoadingFailed });
