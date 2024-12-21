import React from 'react'

const FilterEx = () => {
    var person = [
        {
            id: 1,
            pname: "Aman",
            qualification: "BCA"
        },
        {
            id: 2,
            pname: "Richa",
            qualification: "BBA"
        },
        {
            id: 3,
            pname: "Priya",
            qualification: "BCA"
        },
        {
            id: 4,
            pname: "Dipak",
            qualification: "B.com"
        },
    ]
    const res = person.filter(qua => qua.qualification === "BCA")
    console.log(res);

    return (
        <>
            <div>
                {
                    res.map((items, k) =>
                        <div key={k}>
                            <div>{items.id}</div>
                            <div>{items.pname}</div>
                            <div>{items.qualification}</div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default FilterEx
