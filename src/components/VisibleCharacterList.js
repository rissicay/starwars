import React, { Component } from 'react';
import { connect } from 'react-redux';

import VoteCharacter from './VoteCharacter';
import { charactersFetchData } from '../actions/characters';

import './VisibleCharacterList.css';

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        hasErrored: state.charactersHasErrored,
        isLoading: state.charactersIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(charactersFetchData(url))
    }
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
                {this.props.characters.map((character) => (
                    <li key={character.name} className='character'>
                        <span className="badge">0</span>	
                        <span>{character.name}</span>
                        <VoteCharacter />
                    </li>
                ))}
            </ul>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleCharacterList);
