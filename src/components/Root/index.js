import React from 'react';
import Board from "../Board";

export default class Root extends React.Component {
    render() {
        return (
            <Board knightPosition={[0, 0]}/>
        )
    }
}
