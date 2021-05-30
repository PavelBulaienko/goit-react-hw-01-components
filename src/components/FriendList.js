import React from 'react'
import propTypes from 'prop-types'
import '../styles/friendList.scss'

const FriendList = ({ friends }) => (
    <ul className="friendList">
        { friends.map(friend => (
            <li key={friend.id} className="item">
                {friend.isOnline ? (<span className="online"></span>) : (<span className="offline"></span>)}
                    <img
                        className="avatar"
                        src={friend.avatar}
                        alt={friend.name}
                        width="48"
                    />
                <p className="name">{friend.name}</p>
            </li>))}
    </ul>
)

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.object).isRequired
}

export default FriendList