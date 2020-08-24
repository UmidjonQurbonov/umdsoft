import React from 'react'
import cx from 'classnames'
import st from './homeTwo.module.scss'
import BgComponent from '../../../component/bg_component/bg_componnet'
import { Link } from 'react-router-dom'

import leftImg from '../../../svg/bgLeft.svg'
import rightImg from '../../../svg/bgRight.svg'
import img from '../../../svg/homeTwo.svg'
import raketa from '../../../svg/raketa.svg'
import bloknot from '../../../svg/bloknot.svg'
import money from '../../../svg/money.svg'
import portfel from '../../../svg/portfel.svg'
import wb_bg from '../../../svg/wb_bg.svg'
import play from '../../../svg/play.svg'

const HomeTwo = () => {
    return (
        <div className={cx(st.two)}>
            <h1 className={cx(st.h1)}>
                <i className={cx(st.i)}></i>
                    Почему мы?
                <i className={cx(st.i)}></i>
            </h1>
            <h5 className={cx(st.h5)}>
                Знаете ли вы, почему наши клиенты выбирают нас?
            </h5>
            <div className={cx('row')}>
                <div className={cx('col-md-6 col-sm-12  text-center align-self-center')}>
                    <img src={img} alt="" className={cx("img-fluid ")}/>
                </div>
                <div className={cx('col-md-6 col-sm-12 align-self-center')}>
                    <div className={cx(st.box, st.box_blue)}>
                        <img src={raketa} alt="" className={cx(st.box_img, 'img-fluid ')}/>
                        <div className={cx(st.box_box)}>
                            <h3 className={cx(st.box_h3, st.box_h3_light)}>
                                UMDSOFT - надежный партнер 
                            </h3>
                            <p className={cx(st.box_p, st.box_p_light)}>
                                Mы всегда доводим дело до конца и не бросаем заказчиков с нерешенной проблеме или задачей
                            </p>
                        </div>
                    </div>
                    <div className={cx(st.box, st.box_light)}>
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
                    <div className={cx(st.box, st.box_light)}>
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
                    <div className={cx(st.box, st.box_light)}>
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
                </div>
            </div>

            <div className={cx('row')}>
                <div className={cx(st.content)}>
                    <img src={wb_bg} alt="" className={cx(st.content_img)}/>
                    <h1 className={cx(st.content_h1)}>
                        Давайте приступим к вашему проекта 
                    </h1>
                    <div className={cx(st.content_box)}>
                        <Link to="/work" className={cx(st.content_link)}>
                            <img src={play} alt="" className={cx(st.content_play)}/>
                        </Link>
                    </div>
                </div>
            </div>

            <BgComponent bgImg={leftImg} top="0" left="0%" zIndex="-5"/>
            <BgComponent bgImg={rightImg} top="15%" right="0" zIndex="-5"/>
        </div>
    );
}

export default HomeTwo;