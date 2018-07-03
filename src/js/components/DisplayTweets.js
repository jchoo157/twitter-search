import React, {Component} from 'react';
import UserTweet from './UserTweet';

export default class DisplayTweets extends Component {
  render() {
    const {tweets} = this.props;
    return(
      <div>
        {
          tweets.map(tweet => {
            return <UserTweet tweet={tweet} />
          })
        }
      </div>
    )
  }
}