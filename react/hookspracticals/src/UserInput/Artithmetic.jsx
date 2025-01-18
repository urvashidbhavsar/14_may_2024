import React, { useState } from 'react'

const Artithmetic = () => {
    const [input, setInput] = useState({
        num1: "",
        num2: "",
    });
    const [result, setResult] = useState(null)

    const setValue = (e) => {
        // setInput(e.target.value)
        const { name, value } = e.target
        setInput((set) => ({ ...set, [name]: value }))
    }
    const addition = (e) => {
        e.preventDefault();
        const n1 = Number(input.num1)
        const n2 = Number(input.num2)
        setResult(n1 + n2)
    }
    const subtract = (e) => {
        e.preventDefault();
        const n1 = Number(input.num1)
        const n2 = Number(input.num2)
        setResult(n1 - n2)
    }

    return (
        <>
            <form action="#" style={{ width: 400, margin: "auto", border: "2px solid black", padding: 20 }}>
                <div className='my-2'>
                    <input type="text" name="num1" placeholder='1st number' value={input.num1} onChange={setValue} className='form-control' />
                </div>

                <div className='my-2'>
                    <input type="text" name="num2" placeholder='2nd number' value={input.num2} onChange={setValue} className='form-control' />
                </div>

                <button onClick={addition} className='btn btn-primary m-1'>Addition</button>
                <button onClick={subtract} className='btn btn-primary m-1'>Subtract</button>

                <p>Result : {result}</p>
            </form>
        </>
    )
}

export default Artithmetic
