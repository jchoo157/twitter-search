const defaultState = {
  isLoading: false,
  tweets: []
}

const tweetsByHashtags = (state=defaultState, action) => {
  switch (action.type) {
    case 'REQUEST_TWEETS':
      return Object.assign({}, state, {isLoading: true})
    case 'RECEIVE_TWEETS':
      return Object.assign({}, state, {isLoading: false, tweets: action.statuses})
    default:
      return state
  }
}

export default tweetsByHashtags;