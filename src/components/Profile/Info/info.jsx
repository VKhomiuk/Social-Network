import React from "react";
import s from './info.module.css';

const Info = (props) => {
    console.log()

    return (
        <div className={s.info}>
            <div>
                <img alt='' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
            </div>
            <div className={s.item}>
                {props.profilePage.info.map(i =>
                    <InfoItem
                        id={i.id}
                        fName={i.fName}
                        key={i.id}
                        birth={i.birth}
                        job={i.job}/>)}
            </div>
        </div>
    )
}

const InfoItem = (props) => {
    return(
        <div>
            {props.fName}
        </div>
    )
}

export default Info;