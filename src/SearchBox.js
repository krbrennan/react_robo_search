import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className='tc pa2'>
      <input
        type='search'
        placeholder='Search Robots!'
        className='tc pa3 ba b--green bg-lightest-green'
        onChange={searchChange}
       />
    </div>
  );
}

export default SearchBox;
