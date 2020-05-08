import { FETCH_HERO } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_HERO:
            return action.payload;
        default:
            return state;
    }
};