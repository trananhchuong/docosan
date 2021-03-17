import React from 'react';
import PropTypes from 'prop-types';
import { IDoctorInfoProp } from '../../Interface/IDoctorInfo';

import './styles/doctorInfo.scss';
import Star from '../star/Star';
import { IMAGES_USER } from '../../constants/ImgConstants';

DoctorInfo.propTypes = {

};


function DoctorInfo(props: IDoctorInfoProp) {

    const renderSpecial = () => {

    }

    return (
        <div className="doctor-info">
            <div className="ava">
                <img src={props.avatar || IMAGES_USER.UserDefault} alt="avatar" />
            </div>
            <div className="detail">
                <div>{props.display_name}</div>
                <div>Rating: {props.rating}</div>
                <div>clinic_name: {props.clinic_name}</div>
                <Star rating={props.rating} />

                {/* <div>Chuyên khoa: {props.specialty}</div> */}

                <div>clinicAddress: {props.clinic_address}</div>
             
            </div>
        </div>
    );
}

export default DoctorInfo;