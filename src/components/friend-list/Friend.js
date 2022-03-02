import PropTypes from 'prop-types';

import {
  Card,
  StatusOnline,
  StatusOffline,
  Avatar,
  Name,
} from './Friend.styled';

export const Friend = ({ avatar, name, isOnline, id }) => {
  return (
    <Card>
      {isOnline ? <StatusOnline /> : <StatusOffline />}
      <Avatar src={avatar} alt={'photo ' + name} width="100" />
      <Name>{name}</Name>
    </Card>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
