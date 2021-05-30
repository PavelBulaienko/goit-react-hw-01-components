import React from 'react'
import propTypes from 'prop-types'
import '../styles/profile.scss'

function Profile({ avatar, name, tag, location, stats }) {
    const {followers, views, likes} = stats;
  return (
    <div className="profile">
      <div className="description">
        <img className="avatar" src = {avatar} alt = '#'/>
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="statsItem">
          <span className="label">Followers </span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="statsItem">
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </li>
        <li className="statsItem">
          <span className="label">Likes </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.defaultProps = {
    avatar: 'https://i.stack.imgur.com/y9DpT.jpg'
}

Profile.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
}

export default Profile;