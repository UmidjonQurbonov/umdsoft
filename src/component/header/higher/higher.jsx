import React from 'react'
import st from './higher.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import location from '../../../svg/Location.svg'
import mail from '../../../svg/mail.svg'
import telegram from '../../../svg/telegramlight.svg'
import twitter from '../../../svg/twitter.svg'
import instagram from '../../../svg/instagramlight.svg'


const Higher = () => {
    return (
        <div className={cx(st.higher)}>
            <div className={cx(st.higher_box_1, st.higher_box)}>
                <Link to="/about" className={cx(st.higher_link)}>О нас</Link>
                <Link to="/contact" className={cx(st.higher_link, st.higher_link_border)}>
                    Вопросы-Ответы
                </Link>
            </div>
            <div className={cx(st.higher_box_2, st.higher_box)}>
                <Link to='/map' className={cx(st.higher_link,)}>
                    <img src={location} alt="" className="mr-3"/>
                    <span>Юнусабад 6</span>
                </Link>
                <a href='https://umail.uz' className={cx(st.higher_link,)}  rel="noopener noreferrer" target="_blank">
                    <img src={mail} alt="" className="mr-3"/>
                    <span>info@umdsoft.uz</span>
                </a>
                <a href='https://www.twitter.com' className="mx-2 py-2" rel="noopener noreferrer" target="_blank">
                    <img src={twitter} alt=""/>
                </a>
                <a href='https://telegram.org' rel="noopener noreferrer" target="_blank"  className="mx-2 py-2">
                    <img src={telegram} alt="" />
                </a>
                <a href='https://www.instagram.com' rel="noopener noreferrer" target="_blank" className="ml-2 py-2" >
                    <img src={instagram} alt="" />
                </a>
            </div>
        </div> 
    );
}

export default Higher;