import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import history from '../../../history';

import './HeroListHeader.scss';

const HeroListHeader = () => {
    const onClickBack = () => {
        history.push('/');
    };

    return (
        <div className="sami-header">
            <IoIosArrowBack onClick={onClickBack} className="sami-header_btn" />
            <div className="sami-header_title">
                <h3>sami<span className="thin-txt">heroes</span></h3>
            </div>
        </div>
    );
};

export default HeroListHeader;