import React, { useState } from 'react'

const Editdata = ({ editdata, setEditdata, updatedom }) => {
    const catlist = ["Haircare", "Skincare", "Makeup"]

    const handleupdate = (e) => {
        const updateData = { ...editdata, [e.target.name]: e.target.value }

        if (e.target.name === "oldprice" || e.target.name === "rate") {
            const price = parseFloat(updateData.oldprice) || 0
            const rate = parseFloat(updateData.rate) || 0
            if (price > 0 && rate > 0) {
                updateData.newprice = Math.round(price - (price * rate / 100));
                console.log(updateData.newprice)
            } else {
                updateData.newprice = ""
            }
        }
        setEditdata(updateData)
    }
    const updatealldata = () => {
        fetch(`http://localhost:3000/products/${editdata.id}`, {
            method: "PUT",
            body: JSON.stringify(editdata)
        })
            .then(res => res.json())
            .then(() => {
                updatedom();
                setEditdata({})
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className="modal fade" id="updatedata" tabIndex="-1" aria-labelledby="updatedataLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updatedataLabel">Update Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row g-3 align-items-center">
                                    <div className="col-3">
                                        <label htmlFor="" className='m-0'>Product Id :</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="number" className='form-control' placeholder='ID' value={editdata.id} name="id" readOnly />
                                    </div>
                                    <div className="col-12">
                                        <select name="category" className='form-select' value={editdata.category} onChange={handleupdate}>
                                            <option value="">--- select ---</option>
                                            {
                                                catlist.map(items =>
                                                    <option value={items} key={items}>
                                                        {items}
                                                    </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className='form-control' placeholder='Brand' value={editdata.brand} onChange={handleupdate} name="brand" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className='form-control' placeholder='title' value={editdata.title} onChange={handleupdate} name="title" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className='form-control' placeholder='Description' value={editdata.description} onChange={handleupdate} name="description" />
                                    </div>
                                    <div className="col-5">
                                        <input type="number" className='form-control' placeholder='Old Price' value={editdata.oldprice} onChange={handleupdate} name="oldprice" />
                                    </div>
                                    <div className="col-2">
                                        <input type="number" className='form-control' placeholder='Rate' value={editdata.rate} onChange={handleupdate} name="rate" />
                                    </div>
                                    <div className="col-5">
                                        <input type="number" className='form-control' placeholder='New Price' value={editdata.newprice} onChange={handleupdate} name="newprice" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className='form-control' placeholder='Image URL' value={editdata.image} onChange={handleupdate} name="image" />
                                    </div>
                                    <div className="col-12">
                                        <button type='submit' className='btn btn-success w-100' onClick={updatealldata}>Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editdata
