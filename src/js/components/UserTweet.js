import React from 'react';

const UserTweet = ({tweet}) => {
  return(
    <div className="tweet-content">
      <div>
        <div className="user-image-container">
          <img className="user-image" src={tweet.user.profile_image_url}/>
          <div className="username">{tweet.user.screen_name}</div>
        </div>
        <div className="tweet">{tweet.text}</div>
        <div className="retweet data">Retweets: {tweet.retweet_count}</div>
        <div className="favorite data">Favorites: {tweet.favorite_count}</div>
        <div className="followers data">Followers: {tweet.user.followers_count}</div>
        <div className="friends data">Friends: {tweet.user.friends_count}</div>
        <div className="date">{tweet.created_at}</div>
      </div>
    </div>
  )
}

export default UserTweet;