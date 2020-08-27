import React, { Component } from 'react'
import HomeOne from './homeOne/homeOne';
import HomeTwo from './homeTwo/homeTwo';
import HomeThree from './homeThree/homeThree';
import HomeFour from './homeFour/homeFour';
import HomeFive from './homeFive/homeFive';
import HomeSix from './homeSix/homeSix';





class Home extends Component {
    
    render() {

        return (
           <div>
                <HomeOne/>
                <HomeTwo/>
                <HomeThree/>
                <HomeFour/>
                <HomeFive/>
                <HomeSix/>
			</div>
        );
    }
}

export default Home;