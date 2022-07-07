import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './message';
import { getMessages } from '../data';
import { loadingMessages, messagesLoaded, messageLoadingFailed } from '../reducers/messageActions';

const App = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => {
    console.log('STATE in app', state);
    return state.messages.messages;
  });

  useEffect(() => {
    const loadMessages = () => {
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
    loadMessages();
  }, [dispatch]);

  return (
    <main>
      <h1>Welcome to the NOW TV test!</h1>
      {messages.map((message) => (
        <Message key={message.id} message={message.message} />
      ))}
    </main>
  );
};

export default App;
