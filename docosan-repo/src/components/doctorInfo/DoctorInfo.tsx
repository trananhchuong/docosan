import React from 'react';
import PropTypes from 'prop-types';
import { IDoctorInfoProp } from '../../Interface/IDoctorInfo';

import './styles/doctorInfo.scss';
import Star from '../star/Star';

DoctorInfo.propTypes = {

};


function DoctorInfo(props: IDoctorInfoProp) {
    return (
        <div className="doctor-info" key={props.id}>
            <div className="ava">
                <img src={props.avatar} alt="avatar" />
            </div>
            <div className="detail">
                <div>{props.display_name}</div>
                <div>Rating: {props.rating}</div>
                <div>clinic_name: {props.clinic_name}</div>
                {/* <div>Chuyên khoa: {props.specialty}</div> */}
                <Star
                    rating={props.rating}
                />
                <div>clinicAddress: {props.clinic_address}</div>
            </div>
        </div>
    );
}

export default DoctorInfo;