import PropTypes from 'prop-types';

function Display({ total, next, operation }) {
  return (
    <p className="screen flex">
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </p>
  );
}

Display.propTypes = {
  total: PropTypes.number.isRequired,
  next: PropTypes.number.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
