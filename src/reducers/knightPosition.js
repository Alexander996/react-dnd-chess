import {CHANGE_KNIGHT_POSITION} from '../consts';

const defaultState = {
    x: 1,
    y: 7
};

export default (knightPositionState = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_KNIGHT_POSITION:
            return {x: payload.x, y: payload.y};

        default:
            return knightPositionState;
    }
}
