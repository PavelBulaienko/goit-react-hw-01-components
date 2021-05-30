import React from 'react'
import user from '../data/user.json'
import statisticalData from '../data/statistical-data.json'
import friends from '../data/friends.json'
import transaction from '../data/transactions.json'
import Profile from './Profile'
import Statistics from './Statistics'
import FriendList from './FriendList'
import TransactionHistory from './TransactionHistory'

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title='Upload stats' stats={statisticalData} />
    <FriendList friends={friends} />,
    <TransactionHistory items={transaction} />,
  </>
)

export default App;