import React from 'react'
import Image from '../Images/myimg.jpg'

const Message = (props) => {
    return <img src={props.url} alt="" height={props.size} width={props.size} />
}

const Propex1 = () => {
    return (
        <>
            <Message url={Image} size={400} />
        </>
    )
}

export default Propex1
