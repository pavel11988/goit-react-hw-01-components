import PropTypes from 'prop-types';
import { Statistic } from './Statistics';
import { List, Info } from 'components/statistics/StatisticList.styled';
import { StatisticTitle } from './StatisticTitle';

export const StatisticList = ({ statistic, title }) => {
  return (
    <Info>
      <StatisticTitle title={title} />
      <List>
        {statistic.map(({ id, label, percentage }) => (
          <Statistic key={id} label={label} percentage={percentage} />
        ))}
      </List>
    </Info>
  );
};

StatisticList.propTypes = {
  statistic: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
