import PropTypes from 'prop-types';
import { StatisticItem } from './Statistic.styled';

export const Statistic = ({ label, percentage }) => {
  return (
    <StatisticItem>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatisticItem>
  );
};

Statistic.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
