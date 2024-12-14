import React from 'react'
import Image from './Images/myimg.jpg'

const Imagecall = () => {
    return (
        <>
            <img src={Image} alt="" height={300} width={300} />

            {/* <img src="../%PUBLIC_URL%/favicon.ico" alt="" height={300} width={300} /> */}
        </>
    )
}

export default Imagecall
