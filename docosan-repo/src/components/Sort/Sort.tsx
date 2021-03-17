import React, { useState } from 'react';
import { SortDistanceConstants, SortRatingConstants } from '../../constants/sortFilterConstants';
import './styles/sortStyles.scss';

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