import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import DataFake from '../../constants/data.json';
import Loading from '../loading/Loading';
import _ from 'lodash';

import './styles/doctorList.scss';

DoctorList.propTypes = {

};

interface IDoctorListState {
    loading: boolean,
    dataDoctor: any
}

function DoctorList() {

    const [state, setState] = useState<IDoctorListState>({
        loading: true,
        dataDoctor: []
    });

    useEffect(() => {
        _.delay(() => {
            getDataDoctor()
        }, 300)
    }, []);

    const getDataDoctor = () => {
        setState({
            loading: false,
            dataDoctor: DataFake
        })
    }

    if (state.loading)
        return <Loading />;

    const renderDoctorInfoList = () => {

    }

    return (
        <div className="doctor-list">
            <h3>Danh sách các bác sĩ</h3>
            <div className="sort-filter">
                <Sort />
                <Filter />
            </div>
        </div>
    );
}

export default DoctorList;