const addComment = (state, action) => {
    if (state.id === action.id) {
        return {
            ...state,
            comment: action.comment
        }
    }

    return state;
};

export function character(state = null, action) {
    switch (action.type) {
        case 'SET_VIEW_CHARACTER':
            return action.character;
        case 'ADD_COMMENT_CHARACTER':
            return addComment(state, action);
        default:
            return state;
    }
}
