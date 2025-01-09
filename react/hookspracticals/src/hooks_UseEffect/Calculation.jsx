import React, { useEffect, useState } from 'react'

const Calculation = () => {
    const [count, setCount] = useState(0)
    const [calc, setCalc] = useState(0)

    useEffect(() => {
        setCalc(() => count * 2)
    }, [count])

    const Effects = () => {
        setCount(c => c + 1)
    }
    return (
        <>
            <button onClick={Effects}>Set</button>
            <p>{count} x 2 = {calc}</p>
        </>
    )
}

export default Calculation
