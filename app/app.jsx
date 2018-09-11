import React from 'react';

import Alert from './alert/alert.jsx';


export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Alert summary="Sucesso!" type="success">
                    Alerta personalizado
                </Alert>
            </div>
        );
    }
}