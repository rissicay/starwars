import { planetFetchData } from './planets';

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

                return response;
            })
            .then((response) => response.json())
            .then((json) => {
                let characters = json.results.map((character, idx) => {
                    character.id = idx;
                    character.votes = 0;
                    character.comment = '';

                    const planetArr = character.homeworld.split('/');
                    const id = planetArr[planetArr.length - 2];
                    character.planet_id  = id;

                    dispatch(planetFetchData(id, character.homeworld));

                    return character;
                })

                dispatch(charactersFetchDataSuccess(characters))
                dispatch(charactersIsLoading(false));
            })
            .catch(() => dispatch(charactersHasErrored(true)))
    };
}

export function filterCharacters(term) {
    return {
        type: 'SET_CHARACTER_FILTER',
        term
    }
}
