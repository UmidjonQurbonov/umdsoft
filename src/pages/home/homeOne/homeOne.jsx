import React from 'react'
import st from './homeOne.module.scss'
import cx from 'classnames'

import {BgComponent} from '../../../component'
import {BgAnimation} from '../../../component';
import {Button} from '../../../component';
import {Dots} from '../../../component';

//svg
import img from '../../../svg/home_1.svg'
import bgImg from '../../../svg/intersection.svg'




const HomeOne = () => {
    return (
        <div className={cx(st.home_one)}>
            <div className={cx('row rowP')}>
                <div className={cx('col-md-6 col-sm-12 align-self-center')}>
                    <div className={cx(st.home_one_box,'text-light ')}>
                        <h1 className={cx(st.home_one_h1,'text-uppercase')}>создание <span className={cx(st.text_warning)}>сайта</span></h1>
                        <p className={cx(st.home_one_p)}>Для УСПЕШНОВА ведения бизнеса в интернете</p>
                        <small className={cx(st.home_one_small)}>
                            аша миссия - оказание полного спектра услуг в сфере веб-разработки и автоматизации внутренних процессов
                        </small>
                        <div className={cx('pt-4')} style={{zIndex:'2000'}}>
                            <Button to="/service" fontSize="1.5rem" text="ЗАКАЗАТ САЙТ" padding="1.5rem 2rem" color_1="#F93B0C" color_2="#BB2A02"/>
                        </div>
                    </div>
                </div>
                <div className={cx('col-md-6 col-sm-12 text-center align-self-center ')}>
                    <img className={cx('img-fluid',st.home_one_img)} src={img} alt=""/>
                </div>
            </div>
            <BgAnimation/>
            <BgComponent bgImg={bgImg}  top="20%" left="-10%" zIndex="-1"/>
            <Dots width="10px" height="10px" zIndex="-1" background="#833FB0" left="25%" top="20%" />
            <Dots width="10px" height="10px" zIndex="-1" background="#833FB0" left="20%" top="30%" />
            <Dots width="6px" height="6px" zIndex="-1" background="#833FB0" left="35%" top="45%" />
            <Dots width="8px" height="8px" zIndex="-1" background="#833FB0" left="10%" top="58%" />
            <Dots width="10px" height="10px" zIndex="-1" background="#833FB0" left="10%" top="85%" />
            <Dots width="10px" height="10px" zIndex="-1" background="#833FB0" left="38%" top="65%" />
            <Dots width="10px" height="10px" zIndex="-1" background="#833FB0" left="30%" top="83%" />
            <Dots width="6px" height="6px" zIndex="-1" background="#C1A582" left="5%" top="18%" />
            <Dots width="6px" height="6px" zIndex="-1" background="#C1A582" left="18%" top="22%" />
            <Dots width="6px" height="6px" zIndex="-1" background="#C1A582" left="35%" top="28%" />
            <Dots width="6px" height="6px" zIndex="-1" background="#C1A582" left="26%" top="45%" />
            <Dots width="6px" height="6px" zIndex="-1" background="#C1A582" left="23%" top="70%" />
            
            
    </div>
    );
}

export default HomeOne;