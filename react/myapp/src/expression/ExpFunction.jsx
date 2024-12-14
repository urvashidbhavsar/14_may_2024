import React from 'react'
const Msg = () => {
    return <h1>Hello world</h1>
}
function Message() {
    return <h2>Another Function called</h2>
}

const ExpFunction = () => {
    return (
        <>
            <div>{Msg()} {Message()}</div>
            <div></div>
        </>
    )
}

export default ExpFunction
