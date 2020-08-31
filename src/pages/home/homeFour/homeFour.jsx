import React from 'react'
import st from './homeFour.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import {Title} from '../../../component'
import {Button} from '../../../component'
import {BgComponent} from '../../../component'


import notFound from '../../../svg/notFound.svg'
import bgLeftSmall from '../../../svg/bgLeftSmall.svg'
import bgLeftMiddle from '../../../svg/bgLeftMiddle.svg'
import bgWave from '../../../svg/bgWave.svg'



const HomeFour = () => {

    const title = [
        {title:"Наши работы", text:"Мы Не делаем ПРОСТО сайт.Наша цель - СОЗДАНИЕ САЙТА для получения максимальной прибыли."}
    ]

    const links = [
        "Транспорт и Перевозки","Консалтинг и Финансы","Красота и Здоровье",
        "Недвижимости","Производство и торговля","Строительство и Ремонт",
        "Landing page", "Баннеры","Рассылки"
    ]

    const buttonLink = links.map((link, i) => (
        <Link to="" className={cx(st.four_box_button)}  key={i}>
            {link}
        </Link>
    ))

    // const fourCard = links.map((links) => (
    //         <div className={cx('col-md-4 col-sm-6')} key={links}>
    //             <div className={cx(st.four_card)}>
    //                 <div className={cx(st.four_card_box)}>
    //                     <img src={notFound} alt={links} className={cx('img-fluid')}/>
    //                 </div>
    //             </div>
    //         </div>
    // ))

    return (
        <div className={cx(st.four)}>
            <div>
                <Title title={title[0].title} text={title[0].text} width="60%" />
            </div>
            <div className={cx('rowP row justify-content-center')}>
                <div className={cx('col-sm-12 ')}>
                    <div className={cx(st.four_box)}>
                        <span className={cx(st.four_box_button, 'align-self-center')}>
                            <Button  text="Все" color_1="#FB5E04" color_2="#ec522c" padding=".7rem 1.2rem" fontSize="1.6rem" borderRadius=".4rem" to=""/>
                        </span>
                        {buttonLink}
                    </div>
                </div>
            </div>
            <div className={cx('row rowP justify-content-center')}>
                {/* {fourCard}       */}
            </div>

            <div style={{textAlign:'center', margin:"1rem 0"}}>
                <Button 
                    color_1="#0994EA" 
                    color_2="#1A20A4" 
                    text="ВСЕ ПРОЕКТЫ" 
                    to="" 
                    padding="1.5rem 3.5rem" 
                    fontSize="1.3rem"
                />
            </div>

            {/* <BgComponent bgImg={bgLeftMiddle} zIndex="-1" left="0" top="30%" /> */}
            <BgComponent bgImg={bgLeftSmall} zIndex="-1" right="0" top="10%" deg="180"/>
            <BgComponent bgImg={bgWave} zIndex="-1" right="0" bottom="0" />
        </div>  
    );
}

export default HomeFour;