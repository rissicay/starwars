import { combineReducers } from 'redux';
import { 
    characters, 
    charactersHasErrored, 
    charactersIsLoading,
    filterCharacters
} from './characters';

const rootReducer = combineReducers({
    characters,
    charactersHasErrored,
    charactersIsLoading,
    filterCharacters
});

export default rootReducer;
