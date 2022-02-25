import PropTypes from 'prop-types';

import { StatisticItem } from './Statistic.styled';

const Statistic = ({ id, label, percentage }) => {
  return (
    <StatisticItem color="blue">
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

export default Statistic;
