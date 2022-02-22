import PropTypes from 'prop-types';

const Friend = ({ avatar, name, isOnline, id }) => {
  return (
    <li>
      <span></span>
      <img src={avatar} alt={'photo ' + name} width="300" />
      <h2>{name}</h2>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default Friend;
