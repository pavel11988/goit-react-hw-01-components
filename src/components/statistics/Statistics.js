import PropTypes from 'prop-types';

const Statistic = ({ id, label, percentage }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
};

Statistic.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistic;
