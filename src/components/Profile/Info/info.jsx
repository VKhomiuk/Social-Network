import React from "react";
import s from './info.module.css';

const Info = () => {

    let infoData = [
        {fName: 'Vadym Khomiuk', birth: '25.09.2002', job: 'Gemicle', id: 1}
    ]



    return (
        <div className={s.info}>
            <div>
                <img alt=' ' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
            </div>

            <div className={s.item}>
                {infoData.fName}
                {infoData.birth}
                {infoData.job}
            </div>

        </div>
    )
}

export default Info;