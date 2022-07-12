import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './message';
import { findMemberById } from '../helpers/findMemberById';
import { loadMessages, loadMembers } from '../helpers/loadState';
import { orderByDescendingTimestamp } from '../helpers/orderByDescendingTimestamp';
import { orderByAscendingTimestamp } from '../helpers/orderByAscendingTimestamp';
import styled from 'styled-components';

const AppBackground = styled.main`
  font-family: Helvetica, Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
`;

const Loading = styled.p`
  text-align: center;
  color: white;
`;
//TODO: make this a select dropdown?
const SortButton = styled.button`
  appearance: button;
  backface-visibility: hidden;
  background-color: #00818a;
  border-radius: 6px;
  border-width: 0;
  color: #fff;
  cursor: pointer;
  font-size: 100%;
  height: 44px;
  margin: 2%;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  min-width: 140px;

  &:hover {
    background-color: #0a696f;
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);
  //TODO: move member logic to Message component?
  const members = useSelector((state) => state.members.members);
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    loadMessages(dispatch);
    loadMembers(dispatch);
  }, [dispatch]);

  const orderedMessages = sortAscending ? orderByAscendingTimestamp(messages) : orderByDescendingTimestamp(messages);

  const loaded = !!(members.length && messages.length);
  return (
    <AppBackground>
      <Title>Welcome to the NOW TV test!</Title>
      {loaded && (
        <SortButton onClick={() => setSortAscending(!sortAscending)}>
          Sort {sortAscending ? 'descending' : 'ascending'}
        </SortButton>
      )}
      {loaded ? (
        orderedMessages.map((message) => {
          const member = findMemberById(members, message.userId);
          return <Message key={message.id} message={message} member={member} />;
        })
      ) : (
        <Loading>Loading...</Loading>
      )}
    </AppBackground>
  );
};

export default App;
