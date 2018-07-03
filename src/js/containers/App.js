import React, {Component} from 'react';
import Tweets from './Tweets';

export default class App extends Component {
  render() {
    return(
      <div>
        <h1 className="title">Get Tweets by Hashtags!</h1>
        <Tweets />
      </div>
    )
  }
}