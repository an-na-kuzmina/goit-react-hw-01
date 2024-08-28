import './components/FriendList/FriendList.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li id={id}>
      <img src={avatar} alt={`${name} avatar`} width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </li>
  );
};

export default FriendListItem;
