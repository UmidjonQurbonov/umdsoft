import React from 'react'
import { Header } from '../component'
import Footer from '../component/footer/footer'
import {Fade} from 'react-reveal'

const Layout = (props) => {
    return(
        <div className="layout">
            <Header/>
            { props.children }
            <Fade bottom>
                <Footer/>
            </Fade>
        </div>
    )
}

export default Layout;