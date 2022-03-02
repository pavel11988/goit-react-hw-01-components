import PropTypes from 'prop-types';
import { Statistic } from './Statistics';
import { List, Title, Info } from 'components/statistics/StatisticList.styled';

export const StatisticList = ({ statistic }) => {
  return (
    <Info>
      <Title>
        <h2>Upload stats</h2>
      </Title>
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
