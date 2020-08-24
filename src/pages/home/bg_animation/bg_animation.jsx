import React from 'react';
import st from './bg_animation.module.scss'
import cx from 'classnames'


const BgAnimation = () => {
    return (
        <div>
            <div className={cx(st.wave, st.water)}></div>
            <div className={cx(st.wave, st.water)}></div>
            <div className={cx(st.wave, st.water)}></div>
        </div>
    );
}

export default BgAnimation;