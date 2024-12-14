import React from 'react'

const logic = () => {
    var a = 10, b = 10
    if (a == b && a <= b) {
        return <h3>Equal</h3>
    }
}

const logical = () => {
    return (
        <>
            {logic()}
        </>
    )
}

export default logical
