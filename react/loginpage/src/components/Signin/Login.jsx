import React, { useState } from 'react'
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom'
// import Home from '../home/Home'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const loginuser = JSON.parse(localStorage.getItem("uservalues"))
        if (input.email === loginuser.email && input.password === loginuser.password) {
            // localStorage.setItem("loggeduser")
            // alert("welcome")
            navigate("/Home")
        } else {
            alert("Invalid email and password")
        }
    }

    const changeText = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'>
                <h3 className='text-center py-3 border-bottom border-3 border-primary'>Login</h3>
                <form onSubmit={handleLogin}>
                    <div className="row w-50 m-auto g-3">
                        <div className="col-12">
                            <input type="text" name="email" id="email" placeholder='Enter Email' className='form-control' onChange={changeText} value={input.email} />
                        </div>
                        <div className="col-12">
                            <input type="password" name="password" id="password" placeholder='Enter Password' className='form-control' onChange={changeText} value={input.password} />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-success w-100' type='submit'>Login</button>
                        </div>
                        <div className="col-12">
                            <p>Dont have account ? <Link to="/reg">Register</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
