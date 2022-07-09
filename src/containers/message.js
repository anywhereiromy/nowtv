import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, member }) => {
  const [showEmail, setShowEmail] = useState(false);
  const { email } = member;

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
