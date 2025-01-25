import React from 'react'
// import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()
    const admindata = JSON.parse(localStorage.getItem("admincredential"))
    const logout = () => {
        localStorage.removeItem("adminlogin")
        navigate("/")
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Product</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Products</a>
                                </li>
                            </ul>
                            <div className='pt-3 d-flex gap-3 align-items-center'>
                                <h5>Welcome, user</h5>
                                <button className='btn btn-danger' onClick={logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Homepage
