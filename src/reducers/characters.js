export function charactersHasErrored(state = false, action) {
    switch (action.type) {
        case 'CHARACTERS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function charactersIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default: 
            return state;
    }
}

export function characters(state = [], action) {
    switch (action.type) {
        case 'CHARACTERS_FETCH_DATA_SUCCESS':
            return action.characters;
        default:
            return state;
    }
}
