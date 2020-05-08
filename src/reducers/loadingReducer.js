import { LOAD_OFF, LOAD_ON } from '../actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case LOAD_ON:
            return action.payload;
        case LOAD_OFF:
            return action.payload;
        default:
            return state;
    }
};