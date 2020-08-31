import React from 'react'
import st from './homeCard.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { Zoom } from 'react-reveal'


export default ({img,deg,title, text,padding, background}) => {
    return(
        
        <Zoom>
            <div className={cx('col-sm-12 col-md-6 col-lg-4')} style={{margin:'4rem 0'}}>
                <div className={cx(st.card)}>
                    <div className={cx(st.content)}></div>
                    <div style={{position:'relative'}}>
                        <div 
                            className={cx(st.card_box)}
                            
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
                            
                                />
                            </div>
                            <div className={cx(st.dots)}></div>
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
                    <div style={{position:"relative", margin:'2rem'}}>
                        <Link to=""  className={cx(st.card_link)}>
                            Читать подробнее <i className={cx(st.card_i)}></i>
                        </Link>
                    </div>
                </div>
            </div>
            
        </Zoom>    
        
    )
}