import React, { useEffect, useRef, useState } from 'react'

const Userefex = () => {
    const [inputval, setInputval] = useState("")
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
    })

    const showcount = (e) => {
        setInputval(e.target.value)
    }
    return (
        <>
            <input type="text" value={inputval} onChange={showcount} />
            <p>{count.current}</p>
        </>
    )
}

export default Userefex
