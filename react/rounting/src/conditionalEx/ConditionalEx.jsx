import React from 'react'

const ConditionalEx = () => {
    const Person = ({ name, city }) => {
        // if (city === "Surat") {
        //     return <div>{name} ✔</div>
        // } else {
        //     return <div>{name} ❌</div>
        // }
        return (city === "Surat") ? <div>{name} ✔</div> : <div>{name} ❌</div>
    }

    return (
        <>
            {/* check person name who's live in surat*/}
            <h5>Person who's live in Surat</h5>
            <Person name="Rohan" city="Surat" />
            <Person name="Priya" city="Bhuj" />
            <Person name="Foram" city="Gandhinagar" />
            <Person name="Rekha" city="Surat" />
            <Person name="Aman" city="Vapi" />
            <Person name="Komal" city="Surat" />
        </>
    )
}

export default ConditionalEx
