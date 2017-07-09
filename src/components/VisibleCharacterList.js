import React, { Component } from 'react';
import { connect } from 'react-redux';

import Character from './Character';
import { charactersFetchData } from '../actions/characters';

import './VisibleCharacterList.css';

const mapStateToProps = (state) => ({
    characters: state.characters,
    hasErrored: state.charactersHasErrored,
    isLoading: state.charactersIsLoading,
    filter: state.filterCharacters
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(charactersFetchData(url))
    }
};

const visibleCharacters = (characters, filter) => {
    return characters
        .filter((character) => character.name.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => {
            if (a.votes > b.votes) {
                return -1;
            } else if (a.votes < b.votes) {
                return 1;
            }

            return 0;
        });
};

class VisibleCharacterList extends Component {
    componentDidMount() {
        this.props.fetchData('http://swapi.co/api/people/');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading.</p>
        }

        if (this.props.isLoading) {
            return <p>Loading...</p>
        }

        return (
            <ul className='characters'>
                {visibleCharacters(this.props.characters, this.props.filter).map((character) => (
                    <Character 
                        key={character.id} 
                        character={character}
                    />
                ))}
            </ul>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleCharacterList);
