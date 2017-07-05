import { combineReducers } from 'redux';
import { characters, charactersHasErrored, charactersIsLoading } from './characters';

const rootReducer = combineReducers({
    characters,
    charactersHasErrored,
    charactersIsLoading
});

export default rootReducer;
