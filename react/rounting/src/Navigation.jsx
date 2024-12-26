import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const Navigation = () => {
    const menu = [
        { navname: "Home", path: "" },
        { navname: "About", path: "/pages/About" },
        { navname: "Contact", path: "/pages/Contact" },
    ]
    return (
        <>
            <ul>
                {
                    menu.map((items, k) =>
                        <li key={k}>
                            <NavLink to={items.path}>
                                {items.navname}
                            </NavLink>
                        </li>
                    )
                }
                {/* <li><NavLink to="">Home</NavLink></li>
                <li><NavLink to="/pages/About">About</NavLink></li>
                <li><NavLink to="/pages/Contact">Contact</NavLink></li> */}
            </ul>
        </>
    )
}

export default Navigation
