import React, { useState } from 'react'

const Usestateex = () => {
    // define hooks
    // here first parameter count is a state
    // 2nd parameter is a effect like a function
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount(count + 1)
    }
    return (
        <>
            <button onClick={decrement}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>{count}</p>
        </>
    )
}

export default Usestateex
