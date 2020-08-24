import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import st from './navbar.module.scss'
import cx from 'classnames'
import search from '../../../svg/search.svg'
import { Button } from '../../button/button'

const Navbar = () => {

    const [active, setActive] = useState(false);
    

   return (
        <div className={cx(st.navbar_container)}>
                <div className={cx(st.navbar)}>
                    <ul className={cx(st.nav)}> 
                        <li className={cx(st.nav_item)}>
                            <NavLink to="/" className={cx(st.nav_link)} exact activeClassName={st.active}>Главная</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="/about" className={cx(st.nav_link)} activeClassName={st.active}>О нас</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="/service" className={cx(st.nav_link)} activeClassName={st.active}>Услуги</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="/work" className={cx(st.nav_link)} activeClassName={st.active}>Наши работы</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="/price" className={cx(st.nav_link)} activeClassName={st.active}>Цены</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="/blog" className={cx(st.nav_link)} activeClassName={st.active}>Блог</NavLink>
                        </li>
                        <li className={cx(st.nav_item)}>
                            <NavLink to="/contact" className={cx(st.nav_link)} activeClassName={st.active}>Контакты</NavLink>
                        </li>
                    </ul>

                </div>
                {/* Search */}
                <div className={cx(st.search, 'ml-auto mr-0')}>
                    <form onSubmit={(e) => e.preventDefault()} className="mr-3">
                        <input type="text" className={cx(st.search_input,)} placeholder="Search" style={active ? {maxWidth:'100%', padding:'.2rem 1rem'} : {maxWidth:0}} required />
                        <img src={search} alt=""  className={cx(st.search_button)} onClick={() => setActive(!active)} />
                    </form>
                    <div style={{alignSelf:'center'}}>
                        <Button text="РАСЧЕТ СТОИМОСТИ" padding="1.2rem 2rem"  color_1="#F93B0C" color_2="#BB2A02"/>
                    </div>
                </div>
            
        </div>
    );
}

export default Navbar;