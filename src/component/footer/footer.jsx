import React from 'react'
import cx from 'classnames'
import st from './footer.module.scss'

import { Link } from 'react-router-dom'

import instagram from '../../svg/Instagram.svg'
import telegram from '../../svg/Telegram.svg'
import facebook from '../../svg/Facebook.svg'
import youtube from '../../svg/Youtube.svg'
import phone from '../../svg/phone.svg'
import mail from '../../svg/mail.svg'
import location from '../../svg/Location.svg'

const Footer = () => {



    return (
        <div className={cx('py-4', st.footer)}>
            {formContent()}
            <div className={cx('row rowP')}>
                {about()}
                {links()}
                {featured()}
                {contact()}
            </div>
        </div>
    );
}

export default Footer;

const formContent = () => {
    return(
        <div className={cx('row rowP',st.footer_box)}>
            <div className={cx('col-md-5 col-sm-12' )}>
                <h1 className={cx(st.footer_h1)}>
                    Подпишитесь на нашу рассылку
                </h1>
                <small className={cx(st.footer_small)}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos eligendi illum saepe. Labore.
                </small>    
            </div>
            <div className={cx('col-md-7 col-sm-12 position-relative')}>
                <form >
                    <input type="email" placeholder="Enter your email" className={cx(st.footer_input)} required />
                    <div style={{positon:'relative'}}>
                        <input type="submit" value="Subscribe Now" className={cx(st.footer_submit)} />
                    </div>
                </form>
            </div>
        </div>
    )
}


const about = () => {
    return(
        <div className={cx('col-md-3 col-sm-6 my-4')}>
            <div className={cx(st.about)}>
                <h2 className={cx(st.h2)}>
                    about us
                </h2>
                <p className={cx(st.p, st.p2)}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facilis impedit.
                </p>
                <div style={{marginTop:"2rem"}}>
                    <a className={cx(st.a)} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank" >
                        <img src={instagram} alt="" className={cx('img-fluid')}/>
                    </a>
                    <a className={cx(st.a)} href="https://telegram.org" rel="noopener noreferrer" target="_blank">
                        <img src={telegram} alt="" className={cx('img-fluid')}/>
                    </a>
                    <a className={cx(st.a)} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                        <img src={facebook} alt="" className={cx('img-fluid')}/>    
                    </a>
                    <a className={cx(st.a)} href="https://www.youtube.com" rel="noopener noreferrer" target="_blank">
                        <img src={youtube} alt="" className={cx('img-fluid')}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

const links = () => {
    return(
        <div className={cx(st.links, 'col-sm-6 col-md-3 my-4')}>
            <div className={cx(st.links)}>
                <h2 className={cx(st.h2)}>
                    important links
                </h2>
                <div className={cx(st.dis)}>
                    <Link to="/about" className={cx(st.p, 'text-capitalize')}>about us</Link>
                    <Link to="/work" className={cx(st.p, 'text-capitalize')}>Projects</Link>
                    <Link to="/service" className={cx(st.p, 'text-capitalize')}>Services</Link>
                    <Link to="/blog" className={cx(st.p, 'text-capitalize')}>Blog</Link>
                    <Link to="/contact" className={cx(st.p, 'text-capitalize')}>Contact</Link>
                </div>
                
            </div>
        </div>
    )
}

const featured = () => {
    return(
        <div className={cx(st.links, 'col-sm-6 col-md-3 my-4')}>
            <div>
                <h2 className={cx(st.h2)}>
                    Featured Service
                </h2>
                <div className={cx(st.dis)}>
                    <Link to="/service" className={cx(st.p, 'text-capitalize')}>it menagment</Link>
                    <Link to="/service" className={cx(st.p, 'text-capitalize')}>development</Link>
                    <Link to="/service" className={cx(st.p, 'text-capitalize')}>services</Link>
                    <Link to="/service" className={cx(st.p, 'text-capitalize')}>UI/UX design</Link>
                    <Link to="/service" className={cx(st.p, 'text-capitalize')}>support engineer</Link>
                </div>
                
            </div>
        </div>
    )
}
const contact = () => {
    return(
        <div className={cx('col-sm-6 col-md-3 my-4')}>
            <div>
                <h2 className={cx(st.h2)}>
                    contact
                </h2>
                <div className={cx(st.dis)}>
                    <a href="telephone:+998917911122" className={cx(st.p, 'text-capitalize my-3')} rel="noopener noreferrer" target="_blank">
                        <img src={phone} alt="" className={cx(st.img)} />
                        <span style={{display:'inline-block'}}>
                            +998917911122
                        </span>
                    </a>
                    <a href="https://umail.uz" className={cx(st.p, 'text-capitalize my-3')} rel="noopener noreferrer" target="_blank">
                        <img src={mail} alt="" className={cx(st.img)} />
                        <span style={{display:'inline-block'}}>
                            info@umdsoft.uz
                        </span>
                    </a>
                    <a href="https://www.google.com/maps/place/%D0%AE%D0%BD%D1%83%D1%81%D0%BE%D0%B1%D0%BE%D0%B4-6,+%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+O%60zbekiston/@41.3686185,69.2625553,16z/data=!4m5!3m4!1s0x38ae8cc31ff417dd:0x6a5ba108648297a9!8m2!3d41.3683947!4d69.2646587"
                        rel="noopener noreferrer" target="_blank"
                        className={cx(st.p, 'text-capitalize my-3')}>
                        <img src={location} alt="" className={cx(st.img)} />
                        <span style={{display:'inline-block'}}>
                            Tashkent city. Yunusobod 6
                        </span>
                    </a>
                    
                </div>
                
            </div>
        </div>
    )
}

