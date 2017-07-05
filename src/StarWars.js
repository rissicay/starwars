// @flow

import React from 'react';
import './StarWars.css';

import VisibleCharacterList from './components/VisibleCharacterList';
import SearchCharacters from './components/SearchCharacters';

const StarWars = () => (
    <div>
        <SearchCharacters />
        <VisibleCharacterList />
    </div>
)
export default StarWars;
