import React, { Component } from 'react';
import { connect } from 'react-redux';

import VoteCharacter from './VoteCharacter';
import { displayCharacter } from '../actions/character';

import './Character.css';

const mapStateToProps = (state) => ({
    planets: state.planets
});

const mapDispatchToProps = (
    dispatch,
    ownProps
) => ({
    onClick() {
        dispatch(displayCharacter(ownProps.character));
    }
});

class Character extends Component {

    displayPlanet() {

        const planetId = this.props.character.planet_id
        const planet = this.props.planets[planetId];

        if (planet && !planet.isLoading) {
            return <span>- {planet.name}</span> 
        }
    }

    render() {
        return (
            <li onClick={this.props.onClick} className='character'> 
                <span className="badge">{this.props.character.votes}</span>
                <span>{this.props.character.name} { this.displayPlanet() }</span>
                <VoteCharacter id={this.props.character.id} />
            </li>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);
