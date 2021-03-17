import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import DataFake from '../../constants/data.json';
import { SortDistanceConstants } from '../../constants/sortFilterConstants';
import { IDoctorInfoProp } from '../../Interface/IDoctorInfo';
import DoctorInfo from '../doctorInfo/DoctorInfo';
import Filter from '../Filter/Filter';
import Loading from '../loading/Loading';
import Sort from '../Sort/Sort';
import './styles/doctorList.scss';

interface IDoctorListState {
    loading: boolean,
    dataDoctor: any,
    sortKey: string,
    filterKey: string,

}

function DoctorList() {

    const [state, setState] = useState<IDoctorListState>({
        loading: true,
        dataDoctor: [],
        sortKey: SortDistanceConstants.value,
        filterKey: ""
    });


    useEffect(() => {
        _.delay(() => {
            getDataDoctor()
        }, 300)
    }, []);

    const getDataDoctor = () => {
        setState({
            ...state,
            loading: false,
            dataDoctor: DataFake,
        })
    }

    if (state.loading)
        return <Loading />;

    const renderDoctorInfoList = (data: [IDoctorInfoProp]) => {
        try {
            console.log("state.sortKey: ", state.sortKey);
            const dataSort = _.orderBy(data, [state.sortKey], ["desc"])

            return _.map(dataSort, (item, index) => {
                const { id, display_name, rating, clinic_name, clinic_address, avatar, specialty, distance } = item;
                const propsDoctorInfo: IDoctorInfoProp = {
                    id,
                    display_name,
                    rating,
                    clinic_name,
                    clinic_address,
                    avatar,
                    specialty,
                    distance
                }

                return <div key={id}>
                    <DoctorInfo
                        {...propsDoctorInfo}
                    />
                </div>
            })
        } catch (error) {
            console.log("🚀 ~ file: DoctorList.tsx ~ line 50 ~ renderDoctorInfoList ~ error", error)
        }
    }

    const handleSort = (value: string) => {
        setState({
            ...state,
            sortKey: value
        })
    }

    const handleFilter = (value: string) => {
        setState({
            ...state,
            filterKey: value
        })
    }

    return (
        <div className="doctor-list">
            <h3>Danh sách các bác sĩ</h3>
            <div className="sort-filter">
                <Sort
                    sortKey={state.sortKey}
                    handleSort={handleSort}
                />
                <Filter
                    filterKey={state.filterKey}
                    handleFilter={handleFilter}
                />
            </div>
            <div className="doctor-info-box">
                {renderDoctorInfoList(state.dataDoctor)}
            </div>
        </div>
    );
}

export default DoctorList;