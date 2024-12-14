import React from 'react'

const ternary = () => {
    const mycss = {

    }
    var a = 10, b = 10;
    var res = (a < b) ? "true" : "False"
    return (
        <>
            <div style={mycss}></div>
            <div>
                {
                    res
                }
            </div>
        </>
    )
}

export default ternary
