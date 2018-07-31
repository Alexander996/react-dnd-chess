import React from 'react';
import PropTypes from 'prop-types';
import {DragSource} from 'react-dnd';

import {ItemTypes} from '../../consts';
import './style.css'

const knightSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends React.Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired
    };

    render() {
        const {connectDragSource, isDragging} = this.props;
        return connectDragSource(
            <div className='knight'
                 style={{opacity: isDragging ? 0.5 : 1}}>
                ♘
            </div>
        )
    }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)
