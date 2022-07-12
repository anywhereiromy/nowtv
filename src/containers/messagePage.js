import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getHumanReadableDateTime } from '../helpers/getHumanReadableDateTime';

const MessageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const MessageCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  min-width: 200px;
  margin: 3%;
  padding: 2%;
  padding-top: 0px;
  width: 15vw;
  border: 1px solid #00818a;
  background-color: white;
  border-radius: 3px;
`;

const BackButton = styled(Link)`
  appearance: button;
  backface-visibility: hidden;
  background-color: #00818a;
  border-radius: 6px;
  border-width: 0;
  color: #fff;
  cursor: pointer;
  font-size: 100%;
  margin: 2%;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #0a696f;
  }
`;

const MessagePage = () => {
  const { userId } = useParams();
  const allMessages = useSelector((state) => state.messages.messages);
  const messages = allMessages.filter((message) => message.userId === userId);
  return (
    <>
      <BackButton to={'/'}>Back</BackButton>
      <MessageContainer>
        {messages.map((message) => {
          const { timestamp, id, message: messageText } = message;
          const parsedTimestamp = getHumanReadableDateTime(timestamp);
          return (
            <MessageCard key={id}>
              <h1>{`${messageText.slice(0, 20).trim()}...`}</h1>
              <time dateTime={timestamp}>{parsedTimestamp}</time>
            </MessageCard>
          );
        })}
      </MessageContainer>
    </>
  );
};

export default MessagePage;
