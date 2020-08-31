import React from 'react'


class Dots extends React.Component{
    render(){
        const {width, height, background, left, right, bottom, top, zIndex} = this.props;
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
}

export default Dots;


