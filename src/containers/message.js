import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getHumanReadableDateTime } from '../helpers/getHumanReadableDateTime';
import ReactTooltip from 'react-tooltip';

const Avatar = styled.img`
  float: right;
`;

const MessageInfo = styled.div`
  margin: 2%;
  padding: 2%;
  border: 1px solid black;
  border-radius: 3px;
`;

const MessageTime = styled.time`
  display: block;
  margin-top: 2%;
`;

const Message = ({ message, member }) => {
  const { timestamp } = message;
  const parsedTimestamp = getHumanReadableDateTime(timestamp);
  const { avatar, email, firstName, lastName, id: memberId } = member;
  return (
    <MessageInfo>
      <Avatar
        src={avatar ? avatar : 'https://dummyimage.com/100x100/0dff00/000000.png'}
        alt={`${avatar ? firstName + "'s" : 'default'} avatar`}
      />
      <p data-tip data-for={memberId}>
        {message.message}
      </p>
      <ReactTooltip id={memberId} role="status">
        <p aria-controls={memberId}>{email}</p>
      </ReactTooltip>
      <MessageTime dateTime={timestamp}>{parsedTimestamp}</MessageTime>
      <Link to={`/messages/${memberId}`}>{`${firstName} ${lastName}`}</Link>
    </MessageInfo>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.string,
    message: PropTypes.string,
    timestamp: PropTypes.string,
  }),
  member: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    ip: PropTypes.string,
  }),
};

export default Message;
