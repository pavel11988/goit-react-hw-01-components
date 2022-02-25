import PropTypes from 'prop-types';
import {
  Card,
  Info,
  Avatar,
  Username,
  Tag,
  Location,
  StatisticList,
  StatisticItem,
  StatisticValue,
} from './User.styled.jsx';

const User = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Info>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Info>

      <StatisticList>
        <StatisticItem>
          Followers
          <StatisticValue>{stats.followers}</StatisticValue>
        </StatisticItem>
        <StatisticItem>
          Views
          <StatisticValue>{stats.views}</StatisticValue>
        </StatisticItem>
        <StatisticItem>
          Likes
          <StatisticValue>{stats.likes}</StatisticValue>
        </StatisticItem>
      </StatisticList>
    </Card>
  );
};

User.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default User;
