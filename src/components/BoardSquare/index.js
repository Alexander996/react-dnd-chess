import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DropTarget} from 'react-dnd';

import Square from '../Square';
import {changeKnightPosition} from '../../AC/knightPosition';
import {ItemTypes} from '../../consts';
import './style.css'

const squareTarget = {
    drop(props, monitor) {
        const {x, y, changeKnightPosition} = props;
        changeKnightPosition(x, y)
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

class BoardSquare extends React.Component {
    static propTypes = {
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        changeKnightPosition: PropTypes.func.isRequired
    };

    render() {
        const {x, y, connectDropTarget, isOver} = this.props;
        const black = (x + y) % 2 === 1;

        return connectDropTarget(
            <div className='board-square'>
                <Square black={black}>
                    {this.props.children}
                </Square>
                <div className={isOver ? 'board-square_is-over' : ''}/>
            </div>
        )
    }
}

export default connect(null, {changeKnightPosition})(DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare))
