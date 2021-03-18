import React, { useRef, useState } from 'react';
import { FilterLangEnglish, FilterLangFrancaise, FilterLangVN, MapLanguage } from '../../constants/sortFilterConstants';
import useOutsideClick from '../../customHook/useOutsideClick';
import './styles/filterStyles.scss';

interface IProps {
    handleFilter: any
    filterKey: string
}

function Filter(props: IProps) {

    const [filterKey, setFilterKey] = useState(props.filterKey || "");
    const [click, setClick] = useState(false);
    const ref: any = useRef(null);

    useOutsideClick(ref, () => {
        if (click) setClick(false);
    });

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

    const isCheckedClass = filterKey ? "checked dropbtn" : "dropbtn";
    const dropdownClass = click ? "dropdown clicked" : "dropdown";

    const handleOnclick = () => {
        setClick(!click);
    }
    const handleRemove = (e: any) => {
        e.stopPropagation();
        setFilterKey("");
    }

    const renderBtnRemove = (filterKey: string) => {
        return filterKey ?
            <span
                className="btn-remove"
                onClick={handleRemove}>
                &ensp;<i className="fa fa-remove"></i>
            </span>
            : null;
    }

    return (
        <div className="filter">
            Lọc kết quả
            <div className={dropdownClass}>
                <button
                    className={isCheckedClass}
                    onClick={handleOnclick}
                    ref={ref}
                >
                    {MapLanguage(filterKey) || "Ngôn ngữ"}

                    {renderBtnRemove(filterKey)}
                </button>
                {renderFormFilter()}
            </div>
        </div>
    );
}

export default Filter;