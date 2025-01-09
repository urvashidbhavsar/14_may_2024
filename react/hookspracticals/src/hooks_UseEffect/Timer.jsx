import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);
    }, [])
    return (
        <>
            <h2>{count}</h2>
        </>
    )
}

export default Timer;
