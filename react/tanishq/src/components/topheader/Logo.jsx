import React from 'react'
import Logotitle from '../../assets/logo.svg'

const Logo = () => {
    return (
        <>
            <div className='col-1'>
                <div className="logo">
                    <img src={Logotitle} alt="" width={100} />
                </div>
            </div>
        </>
    )
}

export default Logo
