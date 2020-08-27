import React from 'react'
import st from './button.module.scss'
import cx from 'classnames'
import {Link} from 'react-router-dom'


const  Button = ({text,padding, color_1, color_2, to, fontSize,borderRadius}) => {
    
    return(
        <Link to={to ? to:'#'}
        className={cx(st.button)} 
            style={{
                padding, 
                backgroundImage:`linear-gradient(to right, ${color_1}, ${color_2})`,
                fontSize,
                borderRadius
                }}
            >
            {text}
        </Link>
    )
}

export default Button;