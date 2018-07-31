import {CHANGE_KNIGHT_POSITION} from '../consts';
import {canChangeKnightPosition} from '../rules/knight';

export default store => next => action => {
    const {type} = action;
    if (type !== CHANGE_KNIGHT_POSITION) next(action);

    const state = store.getState();
    const {x: knightX, y: knightY} = state.knightPosition;
    const {x: toX, y: toY} = action.payload;

    if (canChangeKnightPosition(knightX, knightY, toX, toY)) next(action);
}
