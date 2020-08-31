import React, { Component } from 'react'
import HomeOne from './homeOne/homeOne';
import HomeTwo from './homeTwo/homeTwo';
import HomeThree from './homeThree/homeThree';
import HomeFour from './homeFour/homeFour';
import HomeFive from './homeFive/homeFive';
import HomeSix from './homeSix/homeSix';
import cx from 'classnames'
import './home.scss'




class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            position: 0,
            
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

    }

    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let position = window.pageYOffset;
        this.setState({position});
    }

    tepagaYur = () => {
        let position = this.state.position;
        let bolak = parseInt(position/30);
        let time = parseInt(100/bolak);
        setInterval(() => {
            if(position > 0){
                position = position - bolak
                window.scrollTo({top:position})
            }
        }, time);
        
    }

    

    
    render() {
        return (
           <div>
                <HomeOne/>
                <HomeTwo/>
                <HomeThree/>
                <HomeFour/>
                <HomeFive/>
                <HomeSix/>

                <div className={cx("button_tepaga", this.state.position > 100 ? "showButton" : null)}
                    onClick={() => this.tepagaYur()}
                >
                    <i className="tepaga_burchak"></i>
                </div>
			</div>
        );
    }
}

export default Home;