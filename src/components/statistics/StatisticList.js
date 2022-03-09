import PropTypes from 'prop-types';
import { Statistic } from './Statistics';
import { List, Info, Title } from 'components/statistics/StatisticList.styled';

export const StatisticList = ({ statistic, title }) => {
  return (
    <Info>
      {title && <Title>{title}</Title>}
      <List>
        {statistic.map(({ id, label, percentage }) => (
          <Statistic key={id} label={label} percentage={percentage} />
        ))}
      </List>
    </Info>
  );
};

StatisticList.propTypes = {
  title: PropTypes.string,
  statistic: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
