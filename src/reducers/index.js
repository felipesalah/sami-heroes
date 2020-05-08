import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import searchReducer from './searchReducer';
import heroDetailsReducer from './heroDetailsReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
    hero: searchReducer,
    heroes:  heroesReducer,
    selectedHero: heroDetailsReducer,
    loading: loadingReducer
});