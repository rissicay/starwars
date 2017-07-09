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
        case 'CHARACTERS_IS_LOADING':
            return action.isLoading;
        default: 
            return state;
    }
}

const findCharacter = (characters, id, callback) => {
    return characters.map((character) => {
        if (character.id === id) {
            return callback(character);
        }
        return character;
    });
}

const voteForCharacter = (state, action) => {
    switch (action.type) {
        case 'UP_VOTE_CHARACTER':
            return findCharacter(state, action.id, (character) => {
                return {
                    ...character,
                    votes: ++character.votes
                }
            })
        case 'DOWN_VOTE_CHARACTER':
            return findCharacter(state, action.id, (character) => {
                return {
                    ...character,
                    votes: --character.votes
                }
            });
        default:
            return state;
    }
}

export function characters(state = [], action) {
    switch (action.type) {
        case 'CHARACTERS_FETCH_DATA_SUCCESS':
            return action.characters;
        case 'UP_VOTE_CHARACTER':
            return voteForCharacter(state, action);
        case 'DOWN_VOTE_CHARACTER':
            return voteForCharacter(state, action);
        default:
            return state;
    }
}
