import {CHANGE_KNIGHT_POSITION} from '../consts';

export function changeKnightPosition(x, y) {
    return {
        type: CHANGE_KNIGHT_POSITION,
        payload: {
            x, y
        }
    }
}
