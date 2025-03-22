import Profile from './components/Profile/Profile.jsx';
import userData from './data/userData.json';
import friends from './components/FriendList/Friends.json';
import FriendList from './components/FriendList';
const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
