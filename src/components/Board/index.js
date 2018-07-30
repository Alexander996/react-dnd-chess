import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Square from "../Square";
import Knight from "../Knight";
import {changeKnightPosition} from '../../AC/knightPosition';
import './style.css'

class Board extends React.Component {
    static propTypes = {
        knightPosition: PropTypes.object.isRequired
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

        const {x: knightX, y: knightY} = this.props.knightPosition;
        const piece = (x === knightX && y === knightY) ?
            <Knight/> :
            null;

        return (
            <div key={i} className='board__square'
            onClick={() => this.handleClick(x, y)}>
                <Square black={black}>
                    {piece}
                </Square>
            </div>
        )
    }

    handleClick(x, y) {
        this.props.changeKnightPosition(x, y);
    }
}

export default connect((state) => ({
    knightPosition: state.knightPosition
}), {changeKnightPosition})(Board)
