import React from 'react'
import cx from 'classnames'
import st from './homeFive.module.scss'

import {Title} from '../../../component'
import {Button} from '../../../component'
import {BgComponent} from '../../../component'
import {Dots} from '../../../component'

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
                            to="" 
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
                <div style={{top:"80%", left:"10%", position:'absolute', zIndex:"-15"}}>
                    <img src={wave} alt="" className={cx(st.img)}/>
                </div>
                <div style={{top:"38%", right:"15%", position:'absolute', zIndex:"-15"}}>
                    <img src={wave} alt="" className={cx(st.img)}/>
                </div>
                <div style={{top:"20%", left:"5%", position:'absolute', zIndex:"-15"}}>
                    <img src={wave} alt="" className={cx(st.img)}/>
                </div>
                <div style={{bottom:"25%", left:"20%", position:'absolute', zIndex:"-1"}}>
                    <img src={x} alt="" className={cx(st.imgx)}/>
                </div>
                <div style={{bottom:"15%", right:"21%", position:'absolute', zIndex:"-1"}}>
                    <img src={x} alt="" className={cx(st.imgx)}/>
                </div>
                
                
                
                <BgComponent bgImg={bgWaveLight} bottom="0%" zIndex="-16"/>
                <div className="dots_box dots_box_2">
                    <Dots width="14px" height="14px" background="#FABBFF" top="15%"  left="15%" zIndex="-1" />
                    <Dots width="14px" height="14px" background="#FABBFF" top="20%"  right="20%" zIndex="-1" />
                    <Dots width="14px" height="14px" background="#FABBFF" bottom="20%"  right="60%" zIndex="-1" />
                    <Dots width="10px" height="10px" background="#FFC171" top="10%"  right="27%" zIndex="-1" />
                    <Dots width="10px" height="10px" background="#FFC171" top="80%"  right="35%" zIndex="-1" />
                    <Dots width="10px" height="10px" background="#FFC171" top="60%"  right="80%" zIndex="-1" />
                    <Dots width="10px" height="10px" background="#FFC171" top="30%"  right="65%" zIndex="-1" />
                    <Dots width="10px" height="10px" background="#FFC171" top="13%"  right="50%" zIndex="-1" />
                </div>
        </div>
    );
}

export default HomeFive;
