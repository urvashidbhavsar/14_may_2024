import React from 'react'
import './nav.css'
import Logo from './Logo'
import Nav from './Nav'
// import Container from '../Container'

// how to divide components
const navbar = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className="navbar">
                        <Logo />
                        <Nav />
                    </div>
                </div>
            </header >
        </>
    )
}

export default navbar
