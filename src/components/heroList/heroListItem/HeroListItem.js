import React from 'react';
import { connect } from 'react-redux';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { fetchHero, setLoaderOff, setLoaderOn } from '../../../actions';

import './HeroListItem.scss';

const HeroListItem = props => {
    const onClickItem = async () => {
        props.setLoaderOn();
        await props.fetchHero(props.hero.id);
        props.setLoaderOff();
    }

    return (
        <div className="sami-list_item" onClick={onClickItem}>
            <div className="sami-list_item-avatar">
                <img src={props.hero.image.url} alt={props.hero.name} />
            </div>
            <div className="sami-list_item-title">{props.hero.name}</div>
            <IoIosInformationCircleOutline className="sami-list_item-icon" />
        </div>
    );
};

export default connect(null, { fetchHero, setLoaderOn, setLoaderOff })(HeroListItem);