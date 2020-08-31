import React from 'react';
import st from './title.module.scss'
import cx from 'classnames'
import {Bounce} from 'react-reveal'

const Title = ({ title, text,width, iLeft=true, iRight=true, textAlign, justifyContent,fontSize, lineHeight }) => {
    
    return (
       <div className={cx(st.title)} style={{width, margin:'0 auto',}}>
            <Bounce left>
                <h1 className={cx(st.h1)} style={{justifyContent}}>
                    {iLeft ? <i className={cx(st.i)}></i> : null}
                        {title}
                    {iRight ? <i className={cx(st.i)}></i> : null}
                </h1>
            </Bounce>
            <Bounce right>
                <h5 className={cx(st.h5)} 
                    style={{
                        textAlign,
                        fontSize,
                        lineHeight
                        }}>
                    {text}
                </h5>
            </Bounce>
       </div> 
    );
}

export default Title;