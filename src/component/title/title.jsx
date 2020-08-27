import React from 'react';
import st from './title.module.scss'
import cx from 'classnames'

const Title = ({ title, text,width, iLeft=true, iRight=true, textAlign, justifyContent,fontSize, lineHeight }) => {
    
    return (
       <div style={{width, margin:'0 auto',}}>
           <h1 className={cx(st.h1)} style={{justifyContent}}>
                {iLeft ? <i className={cx(st.i)}></i> : null}
                    {title}
                {iRight ? <i className={cx(st.i)}></i> : null}
            </h1>
            <h5 className={cx(st.h5)} 
                style={{
                    textAlign,
                    fontSize,
                    lineHeight
                    }}>
                {text}
            </h5>
       </div> 
    );
}

export default Title;