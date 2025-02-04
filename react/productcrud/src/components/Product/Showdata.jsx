import React, { useEffect, useState } from 'react'

const Showdata = () => {
    const [getpro, setGetpro] = useState([]);
    // store selected product for edit
    const [editproduct, setEditproduct] = useState(null)
    // edit products value
    const [updateproduct, setUpdateproduct] = useState({})

    // delete code
    const deleteproduct = (id) => {
        const updatedproduct = getpro.filter(product => product.id !== id)
        localStorage.setItem("products", JSON.stringify(updatedproduct))
        setGetpro(updatedproduct)
    }

    useEffect(() => {
        const getitems = JSON.parse(localStorage.getItem("products")) || []
        setGetpro(getitems)
    }, [])

    // handle edit 
    const editallproduct = (product) => {
        setEditproduct(product)
        setUpdateproduct(product)
    }

    const updateproducts = () => {
        const updatedproduct = getpro.map(items =>
            items.id === editproduct.id ? updateproduct : items
        );
        localStorage.setItem("products", JSON.stringify(updatedproduct))
        setGetpro(updatedproduct)
        setEditproduct(null) // for clear modal
    }
    const handleupdate = (e) => {
        // const {name, value} = e.target 
        const updateData = { ...updateproduct, [e.target.name]: e.target.value }

        if (e.target.name === "price" || e.target.name === "rate") {
            const price = parseFloat(updateData.price) || 0
            const rate = parseFloat(updateData.rate) || 0
            if (price > 0 && rate > 0) {
                updateData.discprice = (price - (price * rate / 100)).toFixed(2);
                console.log(updateData.discprice)
            } else {
                updateData.discprice = ""
                console.log(updateData.discprice)
            }
        }
        setUpdateproduct(updateData)
    }
    let selectop = ["Skincare", "Haircare", "Makeup"]
    return (
        <>
            <div className="container-fluid">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Catergories</th>
                            <th>Title</th>
                            <th>Brand</th>
                            <th>Description</th>
                            <th>Original Price</th>
                            <th>Rate</th>
                            <th>Discounted Price</th>
                            <th>Product Image</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getpro.length > 0 ?
                                getpro.map(items => (
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.pcat}</td>
                                        <td>{items.ptitle}</td>
                                        <td>{items.pbrand}</td>
                                        <td>{items.pdes}</td>
                                        <td>{items.price}</td>
                                        <td>{items.rate}</td>
                                        <td>{items.discprice}</td>
                                        <td><img src={items.img} style={{ width: "100px", height: "100px", objectFit: "contain" }} /></td>
                                        <td>
                                            <button className='btn btn-success' onClick={() => editallproduct(items)} data-bs-toggle="modal" data-bs-target="#editproduct">Edit</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => deleteproduct(items.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                                :
                                <tr>
                                    <td colSpan={9}>Data Not found</td>
                                </tr>
                        }
                    </tbody>
                </table>

                {/* set modal */}
                <div className="modal fade" id="editproduct" tabIndex="-1" aria-labelledby="addproLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="addproLabel">
                                    Update Product details
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <select name="pcat" className='form-select' value={updateproduct.pcat} onChange={handleupdate}>
                                                <option value="">
                                                    --- select categories ---
                                                </option>
                                                {
                                                    selectop.map(items =>
                                                        <option key={items} value={items}>{items}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <input type="text" placeholder='Product Brand' className='form-control' value={updateproduct.pbrand} onChange={handleupdate} name='pbrand' />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" placeholder='Product Title' className='form-control' value={updateproduct.ptitle} onChange={handleupdate} name='ptitle' />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" placeholder='Product Description' className='form-control' value={updateproduct.pdes} onChange={handleupdate} name='pdes' />
                                        </div>
                                        <div className="col-5">
                                            <input type="number" placeholder='Original Price' className='form-control' value={updateproduct.price} onChange={handleupdate} name='price' />
                                        </div>
                                        <div className="col-2">
                                            <input type="number" placeholder='Rate' className='form-control' value={updateproduct.rate} onChange={handleupdate} name='rate' />
                                        </div>
                                        <div className="col-5">
                                            <input type="number" placeholder='Discounted Price' className='form-control' value={updateproduct.discprice} onChange={handleupdate} name='discprice' readOnly />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" placeholder='Image' className='form-control' value={updateproduct.img} onChange={handleupdate} name='img' />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" onClick={updateproducts}>
                                        update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Showdata
