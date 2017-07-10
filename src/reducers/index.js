import { combineReducers } from 'redux';
import { 
    characters, 
    charactersHasErrored, 
    charactersIsLoading,
    filterCharacters
} from './characters';

import { character } from './character';
import { planets } from './planets';

const rootReducer = combineReducers({
    characters,
    charactersHasErrored,
    charactersIsLoading,
    filterCharacters,
    character,
    planets
});

export default rootReducer;
