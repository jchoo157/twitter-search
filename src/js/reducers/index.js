import { combineReducers } from 'redux';

import tweetsByHashtags from './tweets';
import sortTweets from './sortTweets';

const rootReducer = combineReducers({tweetsByHashtags, sortTweets})

export default rootReducer;