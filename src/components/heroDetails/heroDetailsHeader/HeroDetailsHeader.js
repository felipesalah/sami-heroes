import React from 'react';
import { connect } from 'react-redux';
import { IoIosClose } from 'react-icons/io';
import history from '../../../history';

import './HeroDetailsHeader.scss';

const HeroDetailsHeader = () => {

    const onClickBack = () => {
        history.push('/search/result');
    };

    return (
        <div className="details-header">
            <div className="details-header_title">
                <h3>hero <span className="thin-txt">details</span></h3>
            </div>
            <IoIosClose onClick={onClickBack} className="details-header_btn" />
        </div>
    );
};

export default connect(null, {})(HeroDetailsHeader);