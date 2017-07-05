// @flow

import React from 'react';

import './VisibleCharacterList.css';

const VisibleCharacterList = () => {
    return (
        <ul className='characters'>
            <li className='character'>
		<span className="badge">0</span>	
		<span>Luke Skywalker</span>
                <span className="vote-container">
                    <i className="vote-up fa fa-arrow-up" aria-hidden="true"></i>
                    <i className="vote-down fa fa-arrow-down" aria-hidden="true"></i>
                </span>
            </li>
        </ul>
    );
};

export default VisibleCharacterList;
