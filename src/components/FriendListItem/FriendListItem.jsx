import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendCard}>
      <img src={avatar} alt="Avatar" className={styles.friendAvatar} />
      <p className={styles.friendName}>{name}</p>
      <p
        className={`${styles.friendStatus} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
