import React, { Component } from 'react';
import { connect } from 'react-redux';

import './VoteCharacter.css';

import { upVoteCharacter, downVoteCharacter } from '../actions/character';

const mapDispatchToProps = (
    dispatch,
    ownProps
) => ({
    onUpVote(e) {
        dispatch(upVoteCharacter(ownProps.id))
    },
    onDownVote() {
        dispatch(downVoteCharacter(ownProps.id))
    }
});

class VoteCharacter extends Component {
    render() {
        return (
            <span className="vote-character">
                <i 
                    className="vote-up fa fa-arrow-up" 
                    onClick={(e) => {
                        e.stopPropagation(); 
                        this.props.onUpVote();
                    }}
                    aria-hidden="true">
                </i>
                <i 
                    className="vote-down fa fa-arrow-down" 
                    onClick={(e) => {
                        e.stopPropagation(); 
                        this.props.onDownVote();
                    }}
                    aria-hidden="true"
                ></i>
            </span>
        );
    }
}

export default connect(null, mapDispatchToProps)(VoteCharacter);
