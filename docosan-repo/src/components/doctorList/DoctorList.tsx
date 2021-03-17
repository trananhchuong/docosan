import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import DataFake from '../../constants/data.json';
import Loading from '../loading/Loading';
import _ from 'lodash';

import './styles/doctorList.scss';
import { IDoctorInfoProp } from '../../Interface/IDoctorInfo';
import { O_APPEND } from 'node:constants';
import DoctorInfo from '../doctorInfo/DoctorInfo';

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

    const renderDoctorInfoList = (data: [IDoctorInfoProp]) => {
        try {
            return _.map(data, (item, index) => {
                const { id, display_name, rating, clinic_name, clinic_address, avatar, specialty } = item;
                const propsDoctorInfo: IDoctorInfoProp = {
                    id,
                    display_name,
                    rating,
                    clinic_name,
                    clinic_address,
                    avatar,
                    specialty,
                }
                return <DoctorInfo
                    {...propsDoctorInfo}
                />
            })
        } catch (error) {
            console.log("🚀 ~ file: DoctorList.tsx ~ line 50 ~ renderDoctorInfoList ~ error", error)
        }

    }

    return (
        <div className="doctor-list">
            <h3>Danh sách các bác sĩ</h3>
            <div className="sort-filter">
                <Sort />
                <Filter />
            </div>
            <div className="doctor-info-box">
                {renderDoctorInfoList(state.dataDoctor)}
            </div>
        </div>
    );
}

export default DoctorList;