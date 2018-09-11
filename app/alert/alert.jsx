import React from 'react';
import './alert.css';

export default class Alert extends React.Component {

    constructor(props) {
        super(props);
        this.type = "alert alert-" + (this.props.type || "info") + " fade in";
    }

    render() {
        return(
            <div className={this.type}>
                <span className="summary">
                    <b>{this.props.summary}</b>
                </span>
                <span className="message">
                    <span>{this.props.children}</span>
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                </span>
            </div>
        );
    }
}