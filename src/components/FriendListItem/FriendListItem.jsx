import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li id={id}>
      <img
        className={s.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={s.userName}>{name}</p>
      <p className={clsx(isOnline ? s.green : s.red)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;
