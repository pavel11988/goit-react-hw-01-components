import PropTypes from 'prop-types';
import css from './Statistic.module.css';

const Statistic = ({ id, label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.value}>{percentage}%</span>
    </li>
  );
};

Statistic.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistic;
