import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/filterStyles.scss';
import { FilterLangEnglish, FilterLangFrancaise, FilterLangVN, MapLanguage, SortDistanceConstants } from '../../constants/sortFilterConstants';


interface IProps {
    handleFilter: any
    filterKey: string
}

function Filter(props: IProps) {

    const [filterKey, setFilterKey] = useState(props.filterKey || "");

    const handleChange = (event: any) => {
        const { target: { value } } = event;
        setFilterKey(value);
        props.handleFilter && props.handleFilter(value);
    };

    const renderFormFilter = () => {
        return <div className="dropdown-content">
            <div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="filter"
                            value={FilterLangVN.value}
                            checked={filterKey === FilterLangVN.value}
                            onChange={handleChange}
                        />
                        {FilterLangVN.label}
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="filter"
                            value={FilterLangEnglish.value}
                            checked={filterKey === FilterLangEnglish.value}
                            onChange={handleChange}
                        />
                        {FilterLangEnglish.label}
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="filter"
                            value={FilterLangFrancaise.value}
                            checked={filterKey === FilterLangFrancaise.value}
                            onChange={handleChange}
                        />
                        {FilterLangFrancaise.label}
                    </label>
                </div>
            </div>
        </div>
    }

    return (
        <div className="filter">
            Lọc kết quả
            <div className="dropdown">
                <button className="dropbtn">{MapLanguage(filterKey) || "Ngôn ngữ"}</button>
                {renderFormFilter()}
            </div>
        </div>
    );
}

export default Filter;