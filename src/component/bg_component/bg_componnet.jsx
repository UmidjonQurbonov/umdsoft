import React from 'react';

const BgComponent = ({zIndex,bgImg, top, left, bottom, right}) => {
    
    return (
        <img 
            style={{
                position:'absolute', 
                zIndex,
                top,
                left,
                right,
                bottom
            }} 
            src={bgImg} 
            alt=""
        />
    );
}

export default BgComponent;