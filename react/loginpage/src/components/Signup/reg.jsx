import React, { useState } from 'react'
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom'

const reg = () => {
    const [input, setInput] = useState({
        user: "",
        email: "",
        password: "",
    })
    // for navigate a page
    const navigate = useNavigate()
    // to store a data on localstorage
    const handleEvent = (e) => {
        e.preventDefault()
        // get existing user
        let existinguser = JSON.parse(localStorage.getItem("uservalues")) || [];
        let updateusers = [...existinguser, input]
        localStorage.setItem("uservalues", JSON.stringify(updateusers))
        navigate("/")
    }

    const changeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'>
                <h3 className='text-center py-3 border-bottom border-3 border-primary'>User Registration</h3>
                <form onSubmit={handleEvent}>
                    <div className="row w-50 m-auto g-3">
                        <div className="col-12">
                            <input type="text" name="user" id="user" placeholder='Enter Name' className='form-control' value={input.user} onChange={changeInput} required />
                        </div>
                        <div className="col-12">
                            <input type="text" name="email" id="email" placeholder='Enter Email' className='form-control' value={input.email} onChange={changeInput} required />
                        </div>
                        <div className="col-12">
                            <input type="password" name="password" id="password" placeholder='Enter Password' className='form-control' value={input.password} onChange={changeInput} required />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-success w-100' type='submit'>Register</button>
                        </div>
                        <div className="col-12">
                            <p>Have already account? <Link to="/">Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default reg
