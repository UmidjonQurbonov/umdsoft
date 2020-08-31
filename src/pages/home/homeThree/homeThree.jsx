import React, { useState } from 'react'
import st from './homeThree.module.scss'
import cx from 'classnames'
import CountUp from 'react-countup'
import {Fade, Zoom} from 'react-reveal'

import {Title} from '../../../component'
import {HomeCard} from '../../../component'
import {Button} from '../../../component'
import {BgComponent} from '../../../component'


import img1 from '../../../svg/www.svg'
import img2 from '../../../svg/mobile.svg'
import img3 from '../../../svg/crm.svg'
import img4 from '../../../svg/laptopsayt.svg'
import img5 from '../../../svg/development.svg'
import img6 from '../../../svg/Seo.svg'
import leftSmall from '../../../svg/bgLeftSmall.svg'
import leftMiddle from '../../../svg/bgLeftMiddle.svg'
import right from '../../../svg/bgRightLong.svg'
import counter from '../../../svg/counter.svg'
import idea from '../../../svg/idea.svg'
import stock from '../../../svg/stock-market.svg'
import shield from '../../../svg/shield.svg'
import onboarding from '../../../svg/onboarding.svg'
import wave from '../../../svg/bgWaveLight.svg'




const HomeThree = () => {

    const cards = [
        {img: img1,title:"веб разработка", text:"Услуги по созданию сайтов и интернет проектов любой сложности."},
        {deg:"155",img: img2,title:"мобильная разработка", text:"Разработка мобильных приложений. Дизайн - прототипирование, программирование и тех поддержка."},
        {deg:"185",img: img3,title:"интеграция crm", text:"Разработка CRM для автоматизации бизнеса, настройка CRM с использованием современных веб - технологий."},
        {deg:"-65",img: img4,title:"продвижения сайтов", text:"Комплексные услуги по оптимизации сайтов и CEO - продвижению, вывод в топ."},
        {deg:"135",img: img5,background:"#1b1aa0",padding:'13px',title:"техническая поддержка", text:'Проведение разовых работ по обслуживанию сайта, комплексное ежемесячное сопровождение сайтов.'},
        {deg:"45",img: img6,background:"#1b1aa0",padding:'13px',title:"социальных маркетинг", text:"Разработка ERP систем, внедрение ERP для управления предприятием и производством. ERP решения для любово бизнеса."}

    ];


    const title=[
        {title:"Наши сервисы",text:"Современные технологии, сильная команда, опыт разработки с 2020 года! Доступные цены для каждого!"},
        {title:"действительные числа", text:"Мы знаем, насколько важен опыт работы с клиентами бизнес, и поэтому мы стремимся сделать вашу компанию преуспеть в этом."}
    ];

    const count = [
        {img:onboarding, count:40, text:"Активные клиенты"},
        {img:shield, count:20, text:"Проекты выполнены"},
        {img:idea, count:12, text:"Консультанты команды"},
        {img:stock, count:10, text:"Славные годы"},
    ]
    
    const [content, setContent] = useState(false);

    const card = cards.map((card, i) => (
        <HomeCard img={card.img} deg={card.deg}
            title={card.title} 
            text={card.text}
            key={i} 
            background={card.background} 
            padding={card.padding}/>
    ))
    
    
    
    const cardCount = content ?  count.map((item, i) => (
        <div className={cx('col-md-6 col-sm-12 my-3')} key={i}>
            <div className={cx(st.counter)}>
                <div className={cx(st.counter_box)}>
                    <img src={item.img} alt="" className={cx(st.counter_box_img, "img-fluid")}/>
                </div>
                <div className={cx(st.counter_counter)}>
                    <h1 className={cx(st.counter_counter_h1)}>
                            <CountUp 
                                end={item.count}
                                duration={3}
                                redraw={true}
                                delay={.5}
                                
                            />+
                    </h1>
                    <p className={cx(st.counter_counter_p)}>{item.text}</p>
                </div>
            </div>
        </div>
    )) : null;


    return (
        <div className={cx(st.three)}>
            <Title title={title[0].title} text={title[0].text} width="70%"/>
            <div className={cx(st.cards)}>
                <div className={cx('row rowP mx-3')}>
                    {card}    
                </div>
            </div>
            <div style={{textAlign:'center'}}>
                <Button 
                    color_1="#0994EA" 
                    color_2="#1A20A4" 
                    text="ВСЕ УСЛУГИ" 
                    to="" 
                    padding="1.5rem 3.5rem" 
                    fontSize="1.3rem"
                />
            </div>

            <div className={cx("row rowP my-5")}>
                <div className={cx("col-md-6 col-sm-12 mx-auto align-self-center")}>
                    <div>
                        <div className={cx('text-uppercase')}>
                            <Title 
                                title={title[1].title} 
                                text={title[1].text} 
                                iLeft={false} textAlign={"left"}
                                justifyContent={"flex-start"}
                                lineHeight={2.2}
                                fontSize={"1.8rem"}

                            />
                        </div>
                        <Fade onReveal={() => setContent(true)}>
                            <div className={cx('row')}>
                                {cardCount}
                            </div>
                        </Fade>
                    </div>
                </div>

                <Zoom>
                    <div className={cx("col-md-6 col-sm-12 mx-auto text-center")}>
                        <img src={counter} alt="" className={cx("img-fluid")}/>
                        <div className="clearImg"></div>
                    </div>
                </Zoom>
                
            </div>

            <BgComponent bgImg={leftSmall} top="15%" left="0" zIndex="-1"/>
            <BgComponent bgImg={right} top="15%" right="0" zIndex="-1"/>
            <BgComponent bgImg={leftMiddle} top="50%" left="0" zIndex="-1"/>
            <BgComponent bgImg={wave} bottom="0" left="0"  zIndex="-1"/>
        </div>
    );
}

export default HomeThree;


