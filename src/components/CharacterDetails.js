import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CharacterDetails.css';

const mapStateToProps = (state) => ({
    character: state.character
});

class CharacterDetails extends Component {

    render() {
        if (!this.props.character) {
           return <h3>Please select a character...</h3>
        }

        return (
            <div className="character-details">
                <h3>{this.props.character.name}</h3>
                <dl>
                    <div>
                    <dt>Mass:</dt>
                    <dd>{this.props.character.mass}</dd>
                    </div>
                    <div>
                    <dt>Hair Color:</dt>
                    <dd>{this.props.character.hair_color}</dd>
                    </div>
                    <div>
                    <dt>Skin Color:</dt>
                    <dd>{this.props.character.skin_color}</dd>
                    </div>
                    <div>
                    <dt>Eye Color:</dt>
                    <dd>{this.props.character.eye_color}</dd>
                    </div>
                    <div>
                    <dt>Birth Year:</dt>
                    <dd>{this.props.character.birth_year}</dd>
                    </div>
                    <div>
                    <dt>Gender:</dt>
                    <dd>{this.props.character.gender}</dd>
                    </div>
                </dl>
            </div>
        );
    }
}

export default connect(mapStateToProps)(CharacterDetails);
