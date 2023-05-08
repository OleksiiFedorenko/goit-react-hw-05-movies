import PropTypes from 'prop-types';

const Warning = ({ message }) => {
  return <p>{message}</p>;
};

Warning.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Warning;
