import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import './styles/sortStyles.scss';
import { SortDistanceConstants, SortRatingConstants } from '../../constants/sortFilterConstants';

interface IProps {
    handleSort: any
    sortKey: string
}

function Sort(props: IProps) {
    
    const [sort, setSort] = useState(props.sortKey || "");

    const handleChange = (event: any) => {
        const { target: { value } } = event;
        setSort(value);
        props.handleSort && props.handleSort(value);
    };

    const renderFormSort = () => {
        return <div className="dropdown-content">
            <div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="sort"
                            value={SortDistanceConstants.value}
                            checked={sort === SortDistanceConstants.value}
                            onChange={handleChange}
                        />
                        {SortDistanceConstants.label}
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="sort"
                            value={SortRatingConstants.value}
                            checked={sort === SortRatingConstants.value}
                            onChange={handleChange}
                        />
                        {SortRatingConstants.label}
                    </label>
                </div>
            </div>
        </div>
    }

    return (
        <div className="sort">
            Sắp xếp theo
            <div className="dropdown">
                <button className="dropbtn">Khoảng cách</button>
                {renderFormSort()}
            </div>
        </div>
    );
}

export default Sort;