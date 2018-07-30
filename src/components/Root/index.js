import React from 'react';
import {Provider} from 'react-redux';

import Board from "../Board";
import store from '../../store'

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Board/>
            </Provider>
        )
    }
}
