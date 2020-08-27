import React from 'react'


const Dots = ({width, height, background, left, right, bottom, top, zIndex}) => {
    return (
        <div 
            style={{
                width,
                height,
                bottom,
                top,
                right,
                left,
                background,
                zIndex,
                borderRadius:'50%',
                position:'absolute'
            }}
        >

        </div>
    );
}

export default Dots;


