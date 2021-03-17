import React from 'react';
import PropTypes from 'prop-types';

import './styles/starStyles.scss';
import _ from 'lodash';

Star.propTypes = {

};

interface IStarProps {
    rating: number
}

function Star(props: IStarProps) {

    const rating = props.rating || 0;

    const renderStar = () => {
        let data = [];
        let rate = 0;

        for (let i = 0; i < 5; i++) {
            if (rate < rating) {
                data.push(<span className="fa fa-star checked"></span>);
            } else {
                data.push(<span className="fa fa-star"></span>);
            }
            rate++;
        }

        return _.map(data, (item, index) => {
            return <span key={index}>
                {item}
            </span>;
        })
    }


    return (
        <div className="start-box">
            {renderStar()}
        </div>
    );
}

export default Star;