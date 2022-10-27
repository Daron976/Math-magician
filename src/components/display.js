import PropTypes from 'prop-types';

function Display({ total, next }) {
  if (total) {
    return (
      <p className="screen flex">{total}</p>
    );
  } if (next) {
    return (
      <p className="screen flex">{next}</p>
    );
  }
  return (
    <p className="screen flex">0</p>
  );
}

Display.propTypes = {
  total: PropTypes.number.isRequired,
  next: PropTypes.number.isRequired,
};

export default Display;
