import React from 'react';

import './VoteCharacter.css';

const VoteCharacter = () => (
    <span className="vote-container">
        <i className="vote-up fa fa-arrow-up" aria-hidden="true"></i>
        <i className="vote-down fa fa-arrow-down" aria-hidden="true"></i>
    </span>
);

export default VoteCharacter;
