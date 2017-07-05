export function charactersHasErrored(bool) {
    return {
        type: 'CHARACTERS_HAS_ERRORED',
        hasErrored: bool
    }
}

export function charactersIsLoading(bool) {
    return {
        type: 'CHARACTERS_IS_LOADING',
        isLoading: bool
    }
}

export function charactersFetchDataSuccess(characters) {
    return {
        type: 'CHARACTERS_FETCH_DATA_SUCCESS',
        characters
    }
}

export function errorAfterFiveSeconds() {
    return (dispatch) => {

    }
}
