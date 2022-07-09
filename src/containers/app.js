import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './message';
import { findMemberById } from '../helpers/findMemberById';
import { loadMessages, loadMembers } from '../helpers/loadState';

const App = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);
  //TODO: move member logic to Message component
  const members = useSelector((state) => state.members.members);

  useEffect(() => {
    loadMessages(dispatch);
    loadMembers(dispatch);
  }, [dispatch]);

  return (
    <main>
      <h1>Welcome to the NOW TV test!</h1>
      {members.length && messages.length
        ? messages.map((message) => {
            const member = findMemberById(members, message.userId);
            return <Message key={message.id} message={message} member={member} />;
          })
        : 'Loading...'}
    </main>
  );
};

export default App;
