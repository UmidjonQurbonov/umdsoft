import React, { Component } from 'react'
import cx from 'classnames'
import st from './header.module.scss'
import Higher from './higher/higher'
import Navbar from './navbar/navbar'
import img from '../../svg/umdsoft.svg'


class Header extends Component {
    state = {  }
    render() {
        return (
            <div className={cx(st.header)}>
                
                  
                    <div className={cx(st.header_box)} >
                        <img src={img} alt="" className={cx(st.header_box_img, 'img-fluid')} />
                    </div>

                    <div>
                        <Higher/>
                        <Navbar/>
                    </div>
                
                
                
            </div>
        );
    }
}

export default Header;

