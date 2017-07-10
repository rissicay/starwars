import React from 'react';
import { connect } from 'react-redux';

import { addCommentCharacter } from '../actions/character';
import InlineEdit from './InlineEdit';

import './CommentBox.css';

const mapStateToProps = (state) => ({
    character: state.character
});

const mapDispatchToProps = (
    dispatch
) => ({
    onChange: (character, comment) => {
        return (comment) => {
            dispatch(addCommentCharacter(character.id, comment))
        }
    }
})

const CommentBox = ({
    character,
    onChange
}) => (
    <div>
        <dl>
            <dt>Comment:</dt>
            <dd>
                <InlineEdit 
                    text={character.comment} 
                    onChange={onChange(character)}
                />
            </dd>
        </dl>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
