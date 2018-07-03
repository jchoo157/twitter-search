import React, {Component} from 'react';
import FilterOption from './FilterOption';

export default class FilterTweets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ['FAVORITES', 'RETWEETS', 'FOLLOWERS', 'FRIENDS']
    }
  }

  render() {
    const {options} = this.state;
    const {setSortTweets, currentOption} = this.props;

    return (
      <div className="filter-tweets">
        <h3>Sort tweets</h3>
        {
          options.map((option) => {
            return (<FilterOption key={option} option={option} setSortTweets={setSortTweets} currentOption={currentOption} />)
          })
        }
      </div>
    )
  }
}

