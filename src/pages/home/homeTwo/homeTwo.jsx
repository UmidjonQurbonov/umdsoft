import React from 'react'
import cx from 'classnames'
import st from './homeTwo.module.scss'
import { Link } from 'react-router-dom'
import {Zoom, Fade, Bounce} from 'react-reveal'

import {BgComponent} from '../../../component'
import Title from '../../../component/title/title'

import leftImg from '../../../svg/bgLeft.svg'
import rightImg from '../../../svg/bgRight.svg'
import img from '../../../svg/homeTwo.svg'
import raketa from '../../../svg/raketa.svg'
import bloknot from '../../../svg/bloknot.svg'
import money from '../../../svg/money.svg'
import portfel from '../../../svg/portfel.svg'
import play from '../../../svg/play.svg'
import rocket from '../../../svg/rocket.png'
import bg_wave from '../../../svg/bgWave.svg'


const HomeTwo = () => {
    const title = "Почему мы?";
    const text = "Знаете ли вы, почему наши клиенты выбирают нас?";
    
    return (
        <div className={cx(st.two)}>
            <Title title={title} text={text} width="85%" />
            <div className={cx('row rowP')}>
                <Fade left>
                    <div className={cx('col-md-6 col-sm-12  text-center align-self-center')}>
                        <img src={img} alt="" className={cx("img-fluid ")}/>
                        <div className={'clearImg'}></div>
                    </div>
                </Fade>
                <div className={cx('col-md-6 col-sm-12 align-self-center mt-5')}>
                    <Zoom right>
                        <div className={cx(st.box)}>
                            <img src={raketa} alt="" className={cx(st.box_img, 'img-fluid ')}/>
                            <div className={cx(st.box_box)}>
                                <h3 className={cx(st.box_h3)}>
                                    UMDSOFT - надежный партнер 
                                </h3>
                                <p className={cx(st.box_p)}>
                                    Mы всегда доводим дело до конца и не бросаем заказчиков с нерешенной проблеме или задачей
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom right>
                        <div className={cx(st.box)}>
                            <img src={bloknot} alt="" className={cx(st.box_img, 'img-fluid ')}/>
                            <div className={cx(st.box_box)}>
                                <h3 className={cx(st.box_h3)}>
                                    Комплексные решения 
                                </h3>
                                <p className={cx(st.box_p)}>
                                    Мы предлагаем создание сайта 'под ключ' начиная с разработки сайта и заканчивая технической поддержкой  
                                </p>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom right>
                        <div className={cx(st.box)}>
                            <img src={money} alt="" className={cx(st.box_img, 'img-fluid ')}/>
                            <div className={cx(st.box_box)}>
                                <h3 className={cx(st.box_h3)}>
                                    Доступные цены  
                                </h3>
                                <p className={cx(st.box_p)}>
                                    Стоимость создания сайта - от 80 тыс руб., система ценообразования прозрачна и понятна 
                                </p>
                            </div>
                        </div>
                    </Zoom>
                   <Zoom right>
                        <div className={cx(st.box)}>
                            <img src={portfel} alt="" className={cx(st.box_img, 'img-fluid ')}/>
                            <div className={cx(st.box_box)}>
                                <h3 className={cx(st.box_h3)}>
                                    Гибкая система оплаты
                                </h3>
                                <p className={cx(st.box_p)}>
                                    Мы предлагаем широкий выбор вариантов оплаты, предоставляем скидки и бонусы, возможно сотрудничество пот ваш бютжет.
                                </p>
                            </div>
                        </div>
                   </Zoom>
                </div>
            </div>

            <Bounce>
                <div className={cx('row rowP')}>
                    <div className={cx(st.content)}>
                        <h1 className={cx(st.content_h1)}>
                            Давайте приступим к вашему проекта 
                        </h1>
                        <div className={cx(st.content_box)}>
                            <Link to="" className={cx(st.content_link)}>
                                <img src={play} alt="" className={cx(st.content_play, 'img-fluid')}/>
                            </Link>
                        </div>
                        <div className={cx(st.content_img_box)}>
                            <img src={rocket} alt="" className={cx(st.content_img, 'img-fluid')} />
                        </div>
                        <div className={cx(st.bg_wight)}></div>
                        <div className={cx(st.bg_wight, st.bg_wight_2)}></div>
                    </div>
                </div>
            </Bounce>

            <BgComponent bgImg={leftImg} top="0" left="0%" zIndex="-5"/>
            <BgComponent bgImg={rightImg} top="15%" right="0" zIndex="-5"/>
            <BgComponent bgImg={bg_wave} bottom="0" right="0" zIndex="-5"/>
        </div>
    );
}

export default HomeTwo;