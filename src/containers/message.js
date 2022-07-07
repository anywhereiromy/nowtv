import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return <p>{message}</p>;
};

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
