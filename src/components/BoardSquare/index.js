import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DropTarget} from 'react-dnd';

import Square from '../Square';
import {changeKnightPosition} from '../../AC/knightPosition';
import {canChangeKnightPosition} from '../../rules/knight';
import {ItemTypes} from '../../consts';
import './style.css'

const squareTarget = {
    canDrop(props) {
        const {x: toX, y: toY, knightPosition} = props;
        const {x: knightX, y: knightY} = knightPosition;
        return canChangeKnightPosition(knightX, knightY, toX, toY)
    },

    drop(props) {
        const {x, y, changeKnightPosition} = props;
        changeKnightPosition(x, y)
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

class BoardSquare extends React.Component {
    static propTypes = {
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool.isRequired,
        changeKnightPosition: PropTypes.func.isRequired
    };

    render() {
        const {x, y, connectDropTarget} = this.props;
        const black = (x + y) % 2 === 1;

        return connectDropTarget(
            <div className='board-square'>
                <Square black={black}>
                    {this.props.children}
                </Square>
                <div className={this.getSquareClass()}/>
            </div>
        )
    }

    getSquareClass() {
        const {isOver, canDrop} = this.props;
        if (isOver && !canDrop) return 'board-square_is-over board-square_red';
        if (!isOver && canDrop) return 'board-square_is-over board-square_yellow';
        if (isOver && canDrop) return 'board-square_is-over board-square_green'
    }
}

export default connect((state) => ({
    knightPosition: state.knightPosition
}), {changeKnightPosition})(DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare))
