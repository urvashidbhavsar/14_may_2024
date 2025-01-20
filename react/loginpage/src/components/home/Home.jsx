import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const user = JSON.parse(localStorage.getItem("uservalues"))
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
    }

    return (
        <>
            <h1>Welcome {user.user}</h1>
            <div>
                <button className='btn btn-outline-danger' onClick={logout}>Logout</button>
            </div>
        </>
    )
}

export default Home
