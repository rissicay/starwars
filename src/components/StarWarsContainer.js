import React from 'react';

import VisibleCharacterList from './VisibleCharacterList';
import SearchCharacters from './SearchCharacters';

import './StarWarsContainer.css';

const StarWarsContainer = () => (
    <div>
        <SearchCharacters />
        <VisibleCharacterList />
    </div>
)
export default StarWarsContainer;
