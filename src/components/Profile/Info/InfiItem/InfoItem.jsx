import React from "react";
import s from "../info.module.css";

const InfoItem = (props) => {
    return(
        <div className={s.profile__info}>
            <p>{props.fName}</p>
            <p>Birth: {props.birth}</p>
            <p>Job: {props.job}</p>
        </div>
    )
}

export default InfoItem
