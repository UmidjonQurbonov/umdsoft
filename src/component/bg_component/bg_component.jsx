import React from 'react';

const BgComponent = ({zIndex,bgImg, top, left, bottom, right, deg}) => {
    
    return (
        <img 
            style={{
                position:'absolute', 
                zIndex,
                top,
                left,
                right,
                bottom,
                transform:`rotate(${deg}deg)`
            }} 
            src={bgImg} 
            alt=""
            className="img-fluid"
        />
    );
}

export default BgComponent;