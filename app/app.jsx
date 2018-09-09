import React from 'react';
import Alert from './alert/alert.jsx';
import "./style.css";

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Alert />
            </div>
        );
    }
}