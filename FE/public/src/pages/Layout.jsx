import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div style={{ minHeight: "90vh" }}>
                <main>{children}</main>
            </div>
        </React.Fragment>
    )
}

export default Layout