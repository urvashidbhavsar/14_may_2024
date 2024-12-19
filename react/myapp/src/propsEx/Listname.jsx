import React from 'react'

const Listname = (props) => {
    return (
        <>
            {
                props.list.map((items, k) => {
                    // console.log(k)
                    return <li key={k}>{items}</li>
                }

                )
            }
        </>
    )
}

export default Listname
