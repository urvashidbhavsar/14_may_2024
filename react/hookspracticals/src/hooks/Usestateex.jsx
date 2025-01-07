import React, { useState } from 'react'

const Usestateex = () => {
    // define hooks
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>{count}</p>
        </>
    )
}

export default Usestateex
