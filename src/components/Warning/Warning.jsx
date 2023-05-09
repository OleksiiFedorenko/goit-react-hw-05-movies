import PropTypes from 'prop-types';
import { Text } from './Warning.styled';

const Warning = ({ message }) => {
  return <Text>{message}</Text>;
};

Warning.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Warning;
