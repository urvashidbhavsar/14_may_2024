import React from 'react'

const Internal = () => {
    // for use internal css create an object
    const mydiv = {
        width: "300px",
        height: "auto",
        padding: "20px",
        border: "1px solid black"
    }
    return (
        <>
            <div style={mydiv}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad cumque, expedita architecto neque cum voluptates a vitae. Ad optio impedit repellat quas! Soluta, debitis sequi nemo esse placeat non.
            </div>
        </>
    )
}

export default Internal
