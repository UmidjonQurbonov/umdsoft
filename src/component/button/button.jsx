import React from 'react'
import './button.scss'
import cx from 'classnames'


export const Button = ({text,padding, color_1, color_2, to, fontSize}) => {
    
    return(
        <a href={to ? to:'#'}
        className={cx('button')} 
            style={{
                padding, 
                backgroundImage:`linear-gradient(to right, ${color_1}, ${color_2})`,
                fontSize,
                }}
            >
            {text}
        </a>
    )
}