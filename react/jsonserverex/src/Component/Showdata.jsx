import React, { useEffect, useState } from 'react'
import Productadd from './Productadd'

const Showdata = () => {
    const [getdata, setGetdata] = useState([])

    const fetchdata = () => {
        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(data => setGetdata(data))
    }

    useEffect(() => {
        fetchdata()
    })

    const setimg = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }

    const deletedata = (id) => {
        if (confirm("Are you sure want to delete this data?")) {
            fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(() => {
                    fetchdata();
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <Productadd productadd={fetchdata} />
            <div className="container py-3">
                <table border={1} className='table table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Rate</th>
                            <th>Image</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map(items =>
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.category}</td>
                                    <td>{items.brand}</td>
                                    <td>{items.title}</td>
                                    <td>{items.description}</td>
                                    <td>
                                        <div><s>₹{items.oldprice}</s></div>
                                        <div>₹{items.newprice}</div>
                                    </td>
                                    <td>{items.rate}%</td>
                                    <td><img src={items.image} alt="" style={setimg} /></td>
                                    <td>
                                        <button onClick={() => deletedata(items.id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showdata
