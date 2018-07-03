const defaultState = {
  option: ''
}

const sortTweetsOption = (state=defaultState, action) => {
  switch (action.type) {
    case 'SET_SORT_TWEETS':
      return Object.assign({}, state, {option: action.option})
    default:
      return state
  }
}

export default sortTweetsOption;