import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import st from './navbar.module.scss'
import cx from 'classnames'
import search from '../../../svg/search.svg'
import {Button} from '../../index'

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [p, setP] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setP(position);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className={cx(st.navbar_container, p > 100 ? st.katta : null)}>
                <div className={cx(st.open)} onClick={() => setToggle(true)}>
                    <i className={cx(st.openIcon)}></i>
                </div>
                <div className={cx(st.navbar, p> 100 ? st.left : null)}>
                    <ul className={cx(st.nav, (toggle ? st.show : st.closed))}>
                        <div className={cx(st.close)} onClick={() => setToggle(false)}>
                            &times;
                        </div> 
                        <li className={cx(st.nav_item)}>
                            <NavLink to="" className={cx(st.nav_link)} exact activeClassName={st.active}>Главная</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="" className={cx(st.nav_link)} >О нас</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="" className={cx(st.nav_link)} >Услуги</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="" className={cx(st.nav_link)} >Наши работы</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="" className={cx(st.nav_link)} >Цены</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="" className={cx(st.nav_link)} >Блог</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="" className={cx(st.nav_link)} >Контакты</NavLink>
                        </li>
                    </ul>

                </div>
                {/* Search */}
                <div className={cx(st.search, 'ml-auto mr-0')}>
                    <form onSubmit={(e) => e.preventDefault()} className="mr-3">
                        <input type="text" className={cx(st.search_input,)} placeholder="Search" style={active ? {maxWidth:'100%', padding:'.2rem 1rem'} : {maxWidth:0}} required />
                        <img src={search} alt=""  className={cx(st.search_button)} onClick={() => setActive(!active)} />
                    </form>
                    <div className={cx(st.button)} style={{alignSelf:'center'}}>
                        <Button text="РАСЧЕТ СТОИМОСТИ" padding="1.1rem 1.8rem"  color_1="#F93B0C" color_2="#BB2A02" />
                    </div>
                </div>
            
        </div>
    );
}

export default Navbar;