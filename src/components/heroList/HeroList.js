import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchHeroes } from '../../actions';

import './HeroList.scss';

import HeroListHeader from './heroListHeader/HeroListHeader';
import HeroListItem from './heroListItem/HeroListItem';

const HeroList = props => {
    const [heroes, setHeroes] = useState(props.heroes);

    const renderList = () => {
        return heroes.map(hero => {
            return (
                <HeroListItem hero={hero} key={hero.id} />
            );
        });
    };

    return (
        <div className="sami-list">
            <HeroListHeader />
            <div className="sami-list_heroes">
                {renderList()}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { heroes: Object.values(state.heroes) };
}

export default connect(mapStateToProps, { fetchHeroes })(HeroList);