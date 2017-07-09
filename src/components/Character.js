import React, { Component } from 'react';
import { connect } from 'react-redux';

import VoteCharacter from './VoteCharacter';
import { displayCharacter } from '../actions/character';

import './Character.css';

const mapDispatchToProps = (
    dispatch,
    ownProps
) => ({
    onClick() {
        dispatch(displayCharacter(ownProps.character));
    }
});

class Character extends Component {
    render() {
        return (
            <li onClick={this.props.onClick} className='character'> 
                <span className="badge">{this.props.character.votes}</span>	
                <span>{this.props.character.name}</span>
                <VoteCharacter id={this.props.character.id} />
            </li>
        );
    }
}

export default connect(null, mapDispatchToProps)(Character);
