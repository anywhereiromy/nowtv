import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './message';
import { findMemberById } from '../helpers/findMemberById';
import { loadMessages, loadMembers } from '../helpers/loadState';
import { orderByDescendingTimestamp } from '../helpers/orderByDescendingTimestamp';
import { orderByAscendingTimestamp } from '../helpers/orderByAscendingTimestamp';

const App = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);
  //TODO: move member logic to Message component
  const members = useSelector((state) => state.members.members);
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    loadMessages(dispatch);
    loadMembers(dispatch);
  }, [dispatch]);

  const orderedMessages = sortAscending ? orderByAscendingTimestamp(messages) : orderByDescendingTimestamp(messages);

  return (
    <main>
      <h1>Welcome to the NOW TV test!</h1>
      {!!(members.length && messages.length) && (
        <button onClick={() => setSortAscending(!sortAscending)}>
          Sort {sortAscending ? 'descending' : 'ascending'}
        </button>
      )}
      {members.length && messages.length
        ? orderedMessages.map((message) => {
            const member = findMemberById(members, message.userId);
            return <Message key={message.id} message={message} member={member} />;
          })
        : 'Loading...'}
    </main>
  );
};

export default App;
