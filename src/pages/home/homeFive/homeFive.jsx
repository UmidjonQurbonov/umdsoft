import React from 'react'
import cx from 'classnames'
import st from './homeFive.module.scss'

import {Title} from '../../../component'
import {Button} from '../../../component'
import {BgComponent} from '../../../component'

import map from '../../../svg/map.svg'
import wave from '../../../svg/waveline.svg'
import x from '../../../svg/x.svg'
import bgWaveLight from '../../../svg/bgWave.svg'




const HomeFive = () => {

    const text = [
        "БОЛЬШЕ С НАМИ",
        "Вы хотите продемонстрировать свой бизнес в топе Присоединяйтесь к нам",
        "Присоединяйтесь к нам"    
    ]

    return (
        <div className={cx(st.five)}>
            <div className={cx(st.five_content)}>
                <div className={cx(st.five_box)} >
                    <Title title={text[0]} text={text[1]} width="60%" lineHeight="2" />
                    <div style={{textAlign:'center', margin:"1rem 0"}}>
                        <Button 
                            color_1="#0994EA" 
                            color_2="#1A20A4" 
                            text={text[2]}
                            to="/contact" 
                            padding="1.2rem 4.5rem" 
                            fontSize="1.3rem"
                            borderRadius="3rem"
                        />
                    </div>
                    <div className={cx(st.five_box_img)}>
                        <img src={map} alt="" className={cx(st.five_box_img_img)}/>
                    </div>
                </div>

            </div>
                <BgComponent bgImg={wave} top="50%" left="10%" />
                <BgComponent bgImg={wave} top="60%" right="20%" />
                <BgComponent bgImg={wave} top="10%" right="0%" />
                <BgComponent bgImg={x} bottom="20%" left="20%" />
                <BgComponent bgImg={x} bottom="15%" right="20%" />
                <BgComponent bgImg={bgWaveLight} bottom="0%" zIndex="-15"/>
        </div>
    );
}

export default HomeFive;
