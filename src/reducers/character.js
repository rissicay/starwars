export function character(state = null, action) {
    switch (action.type) {
        case 'SET_VIEW_CHARACTER':
            return action.character;
        default:
            return state;
    }
}
