import React from 'react';

import VisibleCharacterList from './VisibleCharacterList';
import SearchCharacters from './SearchCharacters';
import CharacterDetails from './CharacterDetails';

import './App.css';

const App = () => (
    <div className="app-container">
        <div className="app-sidebar">
            <SearchCharacters />
            <VisibleCharacterList />
        </div>
        <div className="app-content">
            <CharacterDetails />
        </div>
    </div>
)
export default App;
