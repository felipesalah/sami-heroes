import React, { useState } from 'react';
import { connect } from 'react-redux';

import './HeroDetails.scss';
import HeroDetailsHeader from './heroDetailsHeader/HeroDetailsHeader';

const HeroDetails = props => {
    const [hero, setHero] = useState(props.hero)

    return (
        <div className="sami-details">
            <HeroDetailsHeader />
            <div className="sami-details_info">
                <div className="sami-details_image">
                    <img src={hero.image.url} alt={hero.name} />
                </div>
                <h2>{hero.name}</h2>
                <div className="sami-details_info-item">
                    <div className="item-info">
                        <p className="key">Full name:</p>
                        <p className="value">{hero.biography['full-name']}</p>
                    </div>
                    <div className="item-info">
                        <p className="key">Publisher:</p>
                        <p className="value">{hero.biography.publisher}</p>
                    </div>
                </div>
                <div className="sami-details_info-item">
                    <div className="item-info">
                        <p className="key">Combat:</p>
                        <p className="value">{hero.powerstats.combat}</p>
                    </div>
                    <div className="item-info">
                        <p className="key">Durability:</p>
                        <p className="value">{hero.powerstats.durability}</p>
                    </div>
                </div>
                <div className="sami-details_info-item">
                    <div className="item-info">
                        <p className="key">Intelligence:</p>
                        <p className="value">{hero.powerstats.intelligence}</p>
                    </div>
                    <div className="item-info">
                        <p className="key">Power:</p>
                        <p className="value">{hero.powerstats.power}</p>
                    </div>
                </div>
                <div className="sami-details_info-item">
                    <div className="item-info">
                        <p className="key">Speed:</p>
                        <p className="value">{hero.powerstats.speed}</p>
                    </div>
                    <div className="item-info">
                        <p className="key">Strength:</p>
                        <p className="value">{hero.powerstats.strength}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { hero: state.selectedHero };
}

export default connect(mapStateToProps, {})(HeroDetails);