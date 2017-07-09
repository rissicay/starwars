export function displayCharacter(id) {
    return {
        type: 'SET_VIEW_CHARACTER',
        id
    }
}

export function upVoteCharacter(id) {
    return {
        type: 'UP_VOTE_CHARACTER',
        id
    }
}

export function downVoteCharacter(id) {
    return {
        type: 'DOWN_VOTE_CHARACTER',
        id
    }
}
