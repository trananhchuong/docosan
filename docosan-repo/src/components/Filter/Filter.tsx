import React from 'react';
import PropTypes from 'prop-types';
import './styles/filterStyles.scss';

Filter.propTypes = {

};

function Filter(props: any) {

    const renderFormFilter = () => {
        return <div className="dropdown-content">
            <form>
                <div className="radio">
                    <label>
                        <input type="radio" value="option1" checked={true} />
                        Tiếng Việt
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option2" />
                    English
                </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option2" />
                    Francaise
                </label>
                </div>
            </form>
        </div>
    }

    return (
        <div className="filter">
            Lọc kết quả
            <div className="dropdown">
                <button className="dropbtn">Ngôn ngữ</button>
                {renderFormFilter()}
            </div>
        </div>
    );
}

export default Filter;