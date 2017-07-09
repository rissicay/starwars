import React from 'react';
import { connect } from 'react-redux';

import './VoteCharacter.css';

import { upVoteCharacter, downVoteCharacter } from '../actions/character';

const mapStateToProps = () => ({

})

const mapDispatchToProps = (
    dispatch,
    ownProps
) => ({
    onUpVote() {
        dispatch(upVoteCharacter(ownProps.id))
    },
    onDownVote() {
        dispatch(downVoteCharacter(ownProps.id))
    }
});

const VoteCharacter = ({
    onUpVote,
    onDownVote
}) => (
    <span className="vote-container">
        <i className="vote-up fa fa-arrow-up" onClick={onUpVote} aria-hidden="true"></i>
        <i className="vote-down fa fa-arrow-down" onClick={onDownVote} aria-hidden="true"></i>
    </span>
);

export default connect(mapStateToProps, mapDispatchToProps)(VoteCharacter);
