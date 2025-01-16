import React, { useCallback, useMemo, useState } from 'react'

const Calculation = ({ count }) => {
    const calculateValue = useMemo(() => {
        let total = 0;
        for (let i = 0; i < 1e2; i++) {
            total += i
        }
        return count + total
    }, [count])
    return <div>Value : {calculateValue}</div>
}

const UseCountex = () => {
    const [count, setCount] = useState(0)
    // const [text, setText] = useState("")

    // set usecallback for increment vakue
    const increment = useCallback(() => {
        setCount((numcount) => numcount + 1)
    }, [])

    // const changeText = (e) => {
    //     setText(e.target.value)
    // }
    return (
        <>
            <button onClick={increment}>Increment</button>
            <p>Count : {count}</p>

            <Calculation count={count} />

            {/* <input type="text" value={text} onChange={changeText} />
            <p>{text}</p> */}
        </>
    )
}

export default UseCountex
