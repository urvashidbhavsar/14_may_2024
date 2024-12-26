import React from 'react'
import { Table } from 'react-bootstrap'

const Userdata = () => {
    const data = [
        {
            id: 1,
            name: "Priya",
            address: "Surat"
        },
        {
            id: 2,
            name: "Anuj",
            address: "Navsari"
        },
        {
            id: 3,
            name: "Priti",
            address: "Valsad"
        },
        {
            id: 4,
            name: "Hetal",
            address: "Surat"
        },
        {
            id: 5,
            name: "Jitesh",
            address: "Vapi"
        },
        {
            id: 6,
            name: "Riya",
            address: "Bharuch"
        }
    ]
    var userdata = data.map((tabledata, k) =>
        <tr key={k}>
            <td>{tabledata.id}</td>
            <td>{tabledata.name}</td>
            <td>{tabledata.address}</td>
        </tr>
    )
    var total = data.length

    var handleEvent = (e) => {
        var search = data.filter(search => search.address === e.target.value)
        console.log(search);
    }

    return (
        <>
            <h5>User Data</h5>
            <div><input type="search" placeholder='Search Here' onChange={handleEvent} /></div>
            <Table border={1} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total Data : {total}</td>
                    </tr>
                </tfoot>
            </Table>
        </>
    )
}

export default Userdata
