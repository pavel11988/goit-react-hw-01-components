import PropTypes from 'prop-types';
import css from './User.module.css';
import { Card } from './User.styled.jsx';

const User = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <div className={css.userInfo}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statList}>
        <li className={css.statItem}>
          <span>Followers</span>
          <span className={css.statValue}>{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span>Views</span>
          <span className={css.statValue}>{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span>Likes</span>
          <span className={css.statValue}>{stats.likes}</span>
        </li>
      </ul>
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
