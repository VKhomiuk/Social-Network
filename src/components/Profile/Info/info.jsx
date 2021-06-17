import React from "react";
import s from './info.module.css';

const Info = (props) => {
    return (
        <div className={s.info}>
            <div>
                <img alt=' ' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
            </div>
            <div className={s.item}>
                {props.fName}
                {props.birth}
                {props.job}
            </div>
        </div>
    )
}

export default Info;