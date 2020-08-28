import React from 'react'
import st from './homeCard.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'


export default ({img,deg,title, text,padding, background}) => {
    return(
        
        <div className={cx('col-sm-6 col-md-4')} style={{margin:'4rem 0'}}>
            <div className={cx(st.card)}>
                <div style={{position:'relative'}}>
                    <div 
                        className={cx(st.card_box)}
                        style={{
                            transform:`rotate(${deg}deg)`
                        }}
                    >
                        <div style={{
                            padding,
                            background,
                            borderRadius:"50%"
                        }}>
                            <img 
                                src={img} 
                                alt="" 
                                className={cx(st.card_img)}
                                style={{
                                    transform:`rotate(${-deg}deg)`,
                                }}    
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{position:"relative"}}>
                        <h2 className={cx(st.card_h2)}>
                            {title} 
                        </h2>
                        <p className={cx(st.card_p)}>
                            {text}                        
                        </p>
                    </div>
                </div>
                <div style={{position:"relative", marginBottom:'1rem'}}>
                    <Link to="/service"  className={cx(st.card_link)}>
                        Читать подробнее <i className={cx(st.card_i)}></i>
                    </Link>
                </div>
            </div>
        </div>
            
        
    )
}