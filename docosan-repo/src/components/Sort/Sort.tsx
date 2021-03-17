import React from 'react';
import PropTypes from 'prop-types';
import './styles/sortStyles.scss';

Sort.propTypes = {

};

function Sort(props: any) {

    const renderFormSort = () => {
        return <div className="dropdown-content">
            <form>
                <div className="radio">
                    <label>
                        <input type="radio" value="option1" checked={true} />
                        Khoảng cách
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option2" />
                    Đánh giá
                </label>
                </div>
            </form>
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