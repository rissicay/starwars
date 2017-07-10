export function planetFetchDataSuccessful(id, planet) {
    return {
        type: 'PLANET_FETCH_DATA_SUCCESS',
        id,
        planet
    }
}

export function planetIsLoading(id) {
    return {
        type: 'PLANET_IS_LOADING',
        id
    }
}

export function planetFetchData(id, url) {
    return (dispatch, getState) => {
        const { planets } = getState();

        if (!planets[id]) {
            dispatch(planetIsLoading(id));
            fetch(url)
                .then((response) => {
                    if(!response.ok) {
                        throw Error(response.statusText);
                    }

                    return response;
                })
                .then((response) => response.json())
                .then((planet) => {
                    dispatch(planetFetchDataSuccessful(id, planet));
                })
        }
    };
}
