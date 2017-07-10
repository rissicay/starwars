import React, { Component } from 'react';

import './InlineEdit.css';

class InlineEdit extends Component {

    constructor() {
        super();
        this.state = {
            editFlag: false
        };
    }

    onEdit() {
        this.setState({ editFlag: true });
    }

    onCancel() {
        this.setState({ editFlag: false });
    }

    onSave() {
        this.props.onChange(this.textInput.value);
        this.onCancel();
    }

    onKeyPress(e) {
        if (e.key === 'Enter') {
            this.onSave();
        }
    }

    componentWillReceiveProps() {
        this.setState({ editFlag: false });
    }

    render() {
        if (this.state.editFlag) {
            return (
                <span className="inline-edit">
                    <input ref={(input) => {
                            if (input) {
                                this.textInput = input; 
                                this.textInput.focus()
                            }
                        }}
                        placeholder={this.props.text} 
                        type="text" 
                        onKeyPress={this.onKeyPress.bind(this)}
                    />
                    <button onClick={this.onSave.bind(this)}>Save</button>
                    <button onClick={this.onCancel.bind(this)}>Cancel</button>
                </span>
            );
        }

        if (this.props.text) {
            return (
                <span className="inline-edit" onClick={this.onEdit.bind(this)}>
                    {this.props.text}
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </span>
            );

        } else {
            return (
                <span className="inline-edit inline-edit-not-set" onClick={this.onEdit.bind(this)}>
                    Not set
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </span>
            );
        }
    }
}

export default InlineEdit;
