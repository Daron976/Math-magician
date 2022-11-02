import PropTypes from 'prop-types';

function Display({ total, next, operation }) {
  return (
    <p className="screen flex" data-testid="display">
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </p>
  );
}

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
