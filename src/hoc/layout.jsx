import React from 'react'
import { Header } from '../component'
import Footer from '../component/footer/footer'

const Layout = (props) => {
    return(
        <div className="layout">
            <Header/>
            { props.children }
            <Footer/>
        </div>
    )
}

export default Layout;