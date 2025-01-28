import React from 'react'
import { useNavigate } from 'react-router-dom'
import List from './List'
import Logoimg from './Logoimg'
import Slider from '../slider/Slider'
import '../../App.css'

const Homepage = () => {
    const navigate = useNavigate()
    const admindata = JSON.parse(localStorage.getItem("admincredential"))
    const logout = () => {
        localStorage.removeItem("adminlogin")
        navigate("/")
    }
    let menus = ["Home", "Products"]
    let logocss = {
        width: "100px",
    }
    return (
        <>
            <nav className="navbar fixed-top newnavbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Logoimg logoimg="https://www.logologo.com/logos/eagle-logo-design-free-logo.jpg" logostyle={logocss} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <List menuItems={menus} />
                            </ul>
                            <div className='pt-3 d-flex gap-3 align-items-center'>
                                <h5>Welcome, {admindata.username}</h5>
                                <button className='btn btn-danger' onClick={logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Slider />
        </>
    )
}

export default Homepage
