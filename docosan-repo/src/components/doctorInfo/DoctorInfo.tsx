import _ from 'lodash';
import React from 'react';
import { IMAGES_USER } from '../../constants/ImgConstants';
import { IDoctorInfoProp } from '../../Interface/IDoctorInfo';
import Star from '../star/Star';
import './styles/doctorInfo.scss';

function DoctorInfo(props: IDoctorInfoProp) {

    const renderSpecial = (specialty: any) => {
        return _.map(specialty, (item, key) => {
            return <span key={item.specialty_id || key}>{item.name}</span>
        })
    }

    return (
        <div className="doctor-info">
            <div className="ava">
                <img src={props.avatar || IMAGES_USER.UserDefault} alt="avatar" />
            </div>
            <div className="detail">
                <div className="display-name">{props.display_name}</div>
                <Star rating={props.rating} /> 
                <div className="special">
                   Bác sĩ {renderSpecial(props.specialty)}
                </div>

                <div>{props.clinic_name}</div>

                <div>{props.clinic_address}</div>

            </div>
        </div>
    );
}

export default DoctorInfo;