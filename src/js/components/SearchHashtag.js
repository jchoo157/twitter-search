import React, { Component } from 'react';

export default class SearchHashtag extends Component {
  constructor() {
    super();

    this.searchHashtags = this.searchHashtags.bind(this);
  }

  searchHashtags(e, hashtags, count) {
    e.preventDefault();
    const {fetchTweetsByHashtags} = this.props;
    fetchTweetsByHashtags(hashtags, count)
  }

  render() {
    return(
      <div className="hashtag-form">
        <form onSubmit={(e) => this.searchHashtags(e, this.hashtag.value, this.count.value)}>
          <input ref={node => {this.hashtag = node}} type="text" name="hashtag" id="hashtagInput" placeholder="hashtag1, hashtag2, hashtag3" required="true" />
          <input ref={node => {this.count = node}} type="text" name="count" id="hashtagCount" placeholder="1-100" required="true" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}