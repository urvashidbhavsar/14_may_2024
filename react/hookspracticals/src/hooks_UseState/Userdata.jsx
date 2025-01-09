import React, { useState } from 'react'

const Userdata = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Raj",
            city: "Surat"
        },
        {
            id: 2,
            name: "Gita",
            city: "Vapi"
        },
        {
            id: 3,
            name: "Richa",
            city: "Surat"
        },
        {
            id: 4,
            name: "Foram",
            city: "Vapi"
        },
        {
            id: 5,
            name: "Nidhi",
            city: "Baroda"
        },
    ])

    const [search, setSearch] = useState('')
    const [filterdata, setfilterData] = useState(data)

    const handleEvent = (e) => {
        const val = e.target.value;
        setSearch(val);
        if (val) {
            const filter_data = data.filter(items => items.city.toLowerCase().includes(val.toLowerCase()))
            setfilterData(filter_data)
        } else {
            setfilterData(data)
        }
    }

    return (
        <>
            <input type="text" value={search} onChange={handleEvent} placeholder='Search by city' />
            <br /> <br />
            <p>Total Data : {data.length}</p>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterdata.map((items, k) =>
                            <tr key={k}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.city}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Userdata
