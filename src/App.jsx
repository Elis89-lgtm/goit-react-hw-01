import React from 'react';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './Data/userData.json';
import friends from './components/FriendList/Friends.json';
import transactions from './transactions.json';
import ConfettiEffect from './components/ConfettiEffect/ConfettiEffect';
const App = () => {
  return (
    <div>
      <ConfettiEffect />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
