import React, { Component } from 'react';

import VoteCharacter from './VoteCharacter';

import './Character.css';

class Character extends Component {
    render() {
        return (
            <li className='character'> 
                <span className="badge">{this.props.votes}</span>	
                <span>{this.props.name}</span>
                <VoteCharacter id={this.props.id} />
            </li>
        );
    }
}

export default Character;
