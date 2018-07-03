import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchTweetsByHashtags } from '../actions/tweets';
import { setSortTweets } from '../actions/sortTweets';
import SearchHashtag from '../components/SearchHashtag';
import DisplayTweets from '../components/DisplayTweets';
import FilterTweets from '../components/FilterTweets';

class Tweets extends Component {
  render() {
    const {tweetsByHashtags, fetchTweetsByHashtags, setSortTweets, currentOption} = this.props;
    return(
      <div>
        <SearchHashtag fetchTweetsByHashtags={fetchTweetsByHashtags}/>
        <FilterTweets setSortTweets={setSortTweets} currentOption={currentOption}/>
        <DisplayTweets tweets={tweetsByHashtags.tweets}/>
      </div>
    )
  }
}

const sortTweetsByOption = (tweetsByHashtags, option) => {
  let orderTweets;
  switch (option) {
    case 'FAVORITES':
      orderTweets = tweetsByHashtags.tweets.sort((a, b) => b.favorite_count - a.favorite_count)
      return Object.assign({}, tweetsByHashtags, {tweets: orderTweets})
    case 'RETWEETS':
      orderTweets = tweetsByHashtags.tweets.sort((a, b) => b.retweet_count - a.retweet_count)
      return Object.assign({}, tweetsByHashtags, {tweets: orderTweets})
    case 'FOLLOWERS':
      orderTweets = tweetsByHashtags.tweets.sort((a, b) => b.user.followers_count - a.user.followers_count)
      return Object.assign({}, tweetsByHashtags, {tweets: orderTweets})
    case 'FRIENDS':
      orderTweets = tweetsByHashtags.tweets.sort((a, b) => b.user.friends_count - a.user.friends_count)
      return Object.assign({}, tweetsByHashtags, {tweets: orderTweets})
    default:
      return tweetsByHashtags
  }
}

const mapStateToProps = (state) => ({
  tweetsByHashtags: sortTweetsByOption(state.tweetsByHashtags, state.sortTweets.option),
  currentOption: state.sortTweets.option
})

const mapDispatchToProps = (dispatch) => ({
  fetchTweetsByHashtags: (hashtags, count) => dispatch(fetchTweetsByHashtags(hashtags, count)),
  setSortTweets: (option) => dispatch(setSortTweets(option))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);



