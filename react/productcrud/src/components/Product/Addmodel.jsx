import React, { useState } from 'react'

const Addmodel = () => {
    let selectop = ["Skincare", "Haircare", "Makeup"]

    let [input, setInput] = useState({
        id: "",
        pcat: "",
        pbrand: "",
        ptitle: "",
        pdes: "",
        price: "",
        rate: "",
        discprice: "",
        img: "",
    })
    const handleupdate = (e) => {
        // const {name, value} = e.target 
        const updateData = { ...input, [e.target.name]: e.target.value }

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
        setInput(updateData)
    }

    const handleEvent = (e) => {
        e.preventDefault();
        let getdata = JSON.parse(localStorage.getItem("products")) || [];
        getdata.push(input)
        localStorage.setItem("products", JSON.stringify(getdata))
        alert("product added successfully")

        setInput({
            id: "",
            pcat: "",
            pbrand: "",
            ptitle: "",
            pdes: "",
            price: "",
            rate: "",
            discprice: "",
            img: "",
        })
    }
    console.log(input.price)
    console.log(input.rate)
    console.log(input.discprice)

    return (
        <>
            <div className="modal fade" id="addpro" tabIndex="-1" aria-labelledby="addproLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addproLabel">
                                Add Product details
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleEvent}>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input type="number" placeholder='Product Id' className='form-control' value={input.id} onChange={handleupdate} name='id' />
                                    </div>
                                    <div className="col-12">
                                        <select name="pcat" className='form-select' value={input.pcat} onChange={handleupdate}>
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
                                        <input type="text" placeholder='Product Brand' className='form-control' value={input.pbrand} onChange={handleupdate} name='pbrand' />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" placeholder='Product Title' className='form-control' value={input.ptitle} onChange={handleupdate} name='ptitle' />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" placeholder='Product Description' className='form-control' value={input.pdes} onChange={handleupdate} name='pdes' />
                                    </div>
                                    <div className="col-5">
                                        <input type="number" placeholder='Original Price' className='form-control' value={input.price} onChange={handleupdate} name='price' />
                                    </div>
                                    <div className="col-2">
                                        <input type="number" placeholder='Rate' className='form-control' value={input.rate} onChange={handleupdate} name='rate' />
                                    </div>
                                    <div className="col-5">
                                        <input type="number" placeholder='Discounted Price' className='form-control' value={input.discprice} onChange={handleupdate} name='discprice' readOnly />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" placeholder='Image' className='form-control' value={input.img} onChange={handleupdate} name='img' />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Addmodel
