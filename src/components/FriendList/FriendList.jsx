import './components/FriendList/FriendList.module.css';
import FriendListItem from './components/FriendListItem/FriendListItem.jsx';

const FriendList = ({ list }) => {
  const arrayFriends = list.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));

  return (
    <ul>
      {arrayFriends}
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};
export default FriendList;
