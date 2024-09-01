import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => {
        return (
          <li className={s.friendItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
      ;
    </ul>
  );
};
export default FriendList;
