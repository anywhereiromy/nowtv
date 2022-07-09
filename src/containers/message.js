import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

const Message = ({ message, member }) => {
  const [showEmail, setShowEmail] = useState(false);
  const { email } = member;
  // TODO: make this timezone friendly
  // dayjs("2013-11-18 11:55").tz("America/Toronto", true)
  dayjs.extend(advancedFormat);
  const parsedTimestamp = dayjs(message.timestamp).format('Do MMM YYYY HH:mm');
  return (
    <div>
      {member.avatar ? (
        <img src={member.avatar} alt={`${member.firstName}'s avatar`} />
      ) : (
        <img src="https://dummyimage.com/100x100/0dff00/000000.png" alt="default avatar" />
      )}
      <p
        onMouseOver={() => {
          setShowEmail(true);
        }}
        onMouseOut={() => {
          setShowEmail(false);
        }}
      >
        {message.message}
        {showEmail && <a href={`mailto: ${email}`}>{email}</a>}
      </p>
      <time dateTime={message.timestamp}>{parsedTimestamp}</time>
    </div>
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
