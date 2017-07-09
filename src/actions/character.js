export function displayCharacter(character) {
    return {
        type: 'SET_VIEW_CHARACTER',
        character
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
