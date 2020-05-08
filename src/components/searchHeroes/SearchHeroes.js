import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchHeroes, setSearch, setLoaderOn , setLoaderOff} from '../../actions';

import './SearchHeroes.scss';

const SearchHeroes = props => {
    const [heroName, setHeroName] = useState('');

    const onInputChange = e => {
        setHeroName(e.target.value);
    };

    const onInputFocus = () => {
        document.querySelector('.sami-search_input').classList.add('active');
    };

    const onInputBlur = e => {
        if (e.target.value.length === 0)
        document.querySelector('.sami-search_input').classList.remove('active');
    };

    const onFormSubmit = async e => {
        e.preventDefault();
        props.setSearch(heroName);
        props.setLoaderOn();
        await props.fetchHeroes(heroName);
        props.setLoaderOff();
    }

    const renderInput = () => {
        return (
            <div>
                <label className="sami-search_input" htmlFor="hero">
                    <input 
                        onChange={onInputChange} 
                        onFocus={onInputFocus} 
                        onBlur={onInputBlur} 
                        name="hero" 
                        type="text"
                        value={heroName} 
                    />
                </label>
            </div>
        );
    };

    return (
        <div className="sami-search">
            <h1>sami<span className="thin-txt">heroes</span></h1>
            <form onSubmit={onFormSubmit}>
                {renderInput()}
            </form>
        </div>
    );
};

export default connect(null, { setSearch, fetchHeroes, setLoaderOn, setLoaderOff })(SearchHeroes);
