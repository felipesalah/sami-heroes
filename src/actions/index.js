import superhero from '../api/superhero';
import history from '../history';
import { FETCH_HEROES, SET_SEARCH, FETCH_HERO, LOAD_ON, LOAD_OFF } from './types';

export const setSearch = heroName => dispatch => {
    dispatch({ type: SET_SEARCH, payload: heroName });
};

export const setLoaderOn = () => dispatch => {
    dispatch({ type: LOAD_ON, payload: true })
};

export const setLoaderOff = () => dispatch => {
    dispatch({ type: LOAD_OFF, payload: false })
};

export const fetchHeroes = heroName => async dispatch => {
    const response = await superhero.get(`/search/${heroName}`);
    dispatch({ type: FETCH_HEROES, payload: response.data.results });
    history.push('/search/result');
};

export const fetchHero = id => async dispatch => {
    const response = await superhero.get(`/${id}`);
    dispatch({ type: FETCH_HERO, payload: response.data });
    history.push('/hero/details')
};