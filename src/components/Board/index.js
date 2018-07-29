import React from 'react';
import PropTypes from 'prop-types';

import Square from "../Square";
import Knight from "../Knight";
import './style.css'

export default class Board extends React.Component {
    static propTypes = {
        knightPosition: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    };

    render() {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i))
        }

        return (
            <div className='board'>
                {squares}
            </div>
        )
    }

    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const black = (x + y) % 2 === 1;

        const [knightX, knightY] = this.props.knightPosition;
        const piece = (x === knightX && y === knightY) ?
            <Knight/> :
            null;

        return (
            <div key={i} className='square'>
                <Square black={black}>
                    {piece}
                </Square>
            </div>
        )
    }
}
