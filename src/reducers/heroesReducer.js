import _ from 'lodash';
import { FETCH_HEROES } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_HEROES:
            return { ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
};