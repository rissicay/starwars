export function planets(state = [], action) {
    let temp = [];

    switch (action.type) {
        case 'PLANET_IS_LOADING':
            temp = [
                ...state
            ];

            temp[action.id] = {
                isLoading: true
            };
            return temp;
        case 'PLANET_FETCH_DATA_SUCCESS':
            temp = [
                ...state
            ];

            temp[action.id] = {
                ...action.planet,
                isLoading: false
            };
            return temp;
        default:
            return state
    }
}
