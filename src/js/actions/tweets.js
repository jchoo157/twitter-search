export const requestTweets = () => ({
  type: 'REQUEST_TWEETS'
})

export const receiveTweets = (json) => ({
  type: 'RECEIVE_TWEETS',
  statuses: json.statuses
})


export const fetchTweetsByHashtags = (hashtags, count) => {
  return (dispatch, getState) => {
    dispatch(requestTweets)

    let cleanseHashtags = hashtags.replace(/\s+/g, '').split(',');
    if (cleanseHashtags.length > 1) {
      cleanseHashtags = cleanseHashtags.map(hashtag => {
        if (hashtag[0] == '#') {
          return hashtag
        } else {
          return '#' + hashtag
        }
      }).join(', ')
    } else {
      cleanseHashtags = '#' + cleanseHashtags.join('')
    }

    return fetch('/hashtags?hashtags=' + encodeURIComponent(cleanseHashtags) + '&' + 'count=' + count)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveTweets(json))
      })
  }
}

