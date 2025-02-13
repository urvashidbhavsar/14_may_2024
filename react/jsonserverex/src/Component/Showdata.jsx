import React, { useEffect, useState } from 'react';
import Productadd from './Productadd';
import Editdata from './Editdata';

const Showdata = () => {
    const [getdata, setGetdata] = useState([]);
    const [updateData, setUpdatedata] = useState({});
    const [search, setSearch] = useState("");
    const [filterdata, setFilterdata] = useState("");

    const fetchdata = () => {
        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(data => setGetdata(data))
            .catch(err => console.error("Error fetching data:", err));
    };

    useEffect(() => {
        fetchdata();
    }, []); // Added dependency array to avoid infinite re-fetching

    const setimg = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    };

    const setedit = (items) => {
        setUpdatedata(items);
    };

    const deletedata = (id) => {
        if (window.confirm("Are you sure you want to delete this data?")) {
            fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(() => fetchdata())
                .catch(err => console.error("Error deleting data:", err));
        }
    };

    const handlesearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredData = getdata.filter((items) => {
        if (!search) return true;
        if (filterdata === "brand") {
            return items.brand?.toLowerCase().includes(search.toLowerCase());
        } else if (filterdata === "category") {
            return items.category?.toLowerCase().includes(search.toLowerCase());
        }
        return true;
    });

    return (
        <>
            <Productadd productadd={fetchdata} />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <input
                            type="search"
                            name="search"
                            className='form-control'
                            placeholder='Search Here'
                            onChange={handlesearch}
                            value={search}
                        />
                    </div>
                    <div className="col-6">
                        <select
                            value={filterdata}
                            onChange={(e) => setFilterdata(e.target.value)}
                            className='form-select'
                        >
                            <option value="">All</option>
                            <option value="brand">Brand</option>
                            <option value="category">Category</option>
                        </select>
                    </div>
                </div>
            </div>
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
                        {filteredData.map((items) => (
                            <tr key={items.id}>
                                <td>{items.id}</td>
                                <td>{items.category}</td>
                                <td>{items.brand}</td>
                                <td>{items.title}</td>
                                <td>{items.description}</td>
                                <td>
                                    <div><s>₹{items.oldprice || "N/A"}</s></div>
                                    <div>₹{items.newprice}</div>
                                </td>
                                <td>{items.rate}%</td>
                                <td>
                                    <img src={items.image} alt={items.title} style={setimg} />
                                </td>
                                <td>
                                    <button
                                        className='btn btn-success'
                                        data-bs-toggle="modal"
                                        data-bs-target="#updatedata"
                                        onClick={() => setedit(items)}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => deletedata(items.id)}
                                        className='btn btn-danger'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Editdata editdata={updateData} setEditdata={setUpdatedata} updatedom={fetchdata} />
        </>
    );
};

export default Showdata;
