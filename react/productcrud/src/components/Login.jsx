import React, { useState } from 'react'
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // const handleInput = (e) => {
    //     setInput({ ...input, [e.target.name]: e.target.value })
    // }

    localStorage.setItem("admincredential", JSON.stringify({
        username: "admin",
        password: "admin@123"
    }))

    const storeItem = JSON.parse(localStorage.getItem("admincredential"))

    const checkValidate = (e) => {
        e.preventDefault()
        if (storeItem.username === username && storeItem.password === password) {
            localStorage.setItem("adminlogin", true)
            navigate("/home")
        } else {
            alert("Invalid value")
        }
    }

    return (
        <>
            <Container>
                <form onSubmit={checkValidate}>
                    <div className='loginpage shadow-lg p-5'>
                        <h2 className='pb-3'>Login</h2>
                        <div className="row g-3">
                            <div className="col-12">
                                <FloatingLabel controlId="floatingInput" label="Username">
                                    <Form.Control type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                </FloatingLabel>
                            </div>
                            <div className="col-12">
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </FloatingLabel>
                            </div>
                            <div className="col-12 text-center">
                                <Button varient="Primary" type='submit'>Login</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Login
