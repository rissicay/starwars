import React from 'react';
import { connect } from 'react-redux';
import DebounceInput from 'react-debounce-input';

import { filterCharacters } from '../actions/characters';

import './SearchCharacters.css';

const SearchCharacters = ({ dispatch }) => {
    return (
        <DebounceInput 
            className="search-box" 
            placeholder="Search..." 
            debounceTimeout={300}
            onChange={(event) => {
                console.log(event.target.value);
                dispatch(filterCharacters(event.target.value))
            }}
        />
    );
};

export default connect()(SearchCharacters);
