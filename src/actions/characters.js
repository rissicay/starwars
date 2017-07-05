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

export function charactersFetchData(url) {
    return (dispatch) => {
        dispatch(charactersIsLoading(true));

        fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(charactersIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((json) => {
                dispatch(charactersFetchDataSuccess(json.results))
            })
            .catch(() => dispatch(charactersHasErrored(true)))
    };
}
