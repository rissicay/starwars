// @flow

import React from 'react';

import './SearchCharacters.css';

const SearchCharacters = () => {
    let input;
    return (
        <input className="search-box" ref={node => {
            input = node;
        }} />
    );
};

export default SearchCharacters;
