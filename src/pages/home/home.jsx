import React, { Component } from 'react'
import st from './home.module.scss';
import cx from 'classnames'
import HomeOne from './homeOne/homeOne';
import HomeTwo from './homeTwo/homeTwo';





class home extends Component {
    
    render() {

        return (
           <div className={cx(st.home)}>
                <HomeOne/>
                <HomeTwo/>
			</div>
        );
    }
}

export default home;