import React, { useReducer } from 'react'

const initstate = 0;
const mathtask = (state, action) => {
    switch (action) {
        case "add":
            return state + 1
        case "subtract":
            return state - 1
        case "multiply":
            return state * 2
        case "division":
            return state / 2
        default:
            throw new Error("unexpected action")
    }
}
const UseReducerEx = () => {
    const [count, setCount] = useReducer(mathtask, initstate)
    return (
        <>
            <button onClick={() => setCount("add")}>add</button>
            <button onClick={() => setCount("subtract")}>subtract</button>
            <button onClick={() => setCount("multiply")}>multiply</button>
            <button onClick={() => setCount("division")}>division</button>
            <p>Value is : {count}</p>
        </>
    )
}

export default UseReducerEx
