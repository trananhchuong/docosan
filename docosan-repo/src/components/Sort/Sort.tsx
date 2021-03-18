import React, { useRef, useState } from 'react';
import { SortDistanceConstants, SortRatingConstants, MapSort } from '../../constants/sortFilterConstants';
import useOutsideClick from '../../customHook/useOutsideClick';
import './styles/sortStyles.scss';

interface IProps {
    handleSort: any
    sortKey: string
}

function Sort(props: IProps) {

    const [sort, setSort] = useState(props.sortKey || "");
    const [click, setClick] = useState(false);
    const ref: any = useRef(null);

    useOutsideClick(ref, () => {
        if (click) setClick(false);
    });

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

    const handleOnclick = () => {
        setClick(!click);
    }

    const dropdownClass = click ? "dropdown clicked" : "dropdown";
    return (
        <div className="sort">
            Sắp xếp theo
            <div className={dropdownClass}>
                <button
                    className="dropbtn"
                    onClick={handleOnclick}
                    ref={ref}
                >
                    {MapSort(sort)}
                </button>
                {renderFormSort()}
            </div>
        </div>
    );
}

export default Sort;