import { combineReducers } from 'redux';
import { 
    characters, 
    charactersHasErrored, 
    charactersIsLoading,
    filterCharacters
} from './characters';

import { character } from './character';

const rootReducer = combineReducers({
    characters,
    charactersHasErrored,
    charactersIsLoading,
    filterCharacters,
    character
});

export default rootReducer;
