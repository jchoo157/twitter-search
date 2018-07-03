import React from 'react';

const FilterOption = ({option, setSortTweets, currentOption}) => {
  return (
    <div className={"filter-option " + (option == currentOption ? 'selected' : '')} onClick={() => setSortTweets(option)}>
      {option}
    </div>
  )
}

export default FilterOption;

