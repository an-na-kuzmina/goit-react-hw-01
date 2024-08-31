import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.cardProfile}>
      <div className={s.userInfo}>
        <img src={image} alt={`${name}'s avatar`} className={s.userImg} />
        <p className={s.userName}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span className={s.statValues}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={s.statValues}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={s.statValues}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
