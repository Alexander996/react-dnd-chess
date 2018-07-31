import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BoardSquare from '../BoardSquare';
import Knight from '../Knight';
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

        return (
            <div key={i} className='board__square'>
                <BoardSquare x={x} y={y}>
                    {this.renderPiece(x, y)}
                </BoardSquare>
            </div>
        )
    }

    renderPiece(x, y) {
        const {x: knightX, y: knightY} = this.props.knightPosition;
        if (x === knightX && y === knightY) {
            return <Knight/>
        }
    }
}

export default connect((state) => ({
    knightPosition: state.knightPosition
}))(DragDropContext(HTML5Backend)(Board))
