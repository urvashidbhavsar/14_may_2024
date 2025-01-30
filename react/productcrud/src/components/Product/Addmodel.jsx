import React, { useState } from 'react'

const Addmodel = () => {
    let selectop = ["Skincare", "Haircare", "Makeup"]

    let [id, setId] = useState(1)
    let [pcat, setPcat] = useState("")
    let [pbrand, setPbrand] = useState("")
    let [ptitle, setPtitle] = useState("")
    let [pdes, setPdes] = useState("");
    let [price, setPrice] = useState("")
    let [discprice, setDiscprice] = useState("")
    let [img, setImg] = useState("");

    // let [input,setInput] = useState({})
    console.log(pcat);
    console.log(pbrand);
    console.log(ptitle);
    console.log(pdes);
    console.log(price);
    console.log(discprice);
    console.log(img);


    return (
        <>
            <div className="modal fade" id="addpro" tabIndex="-1" aria-labelledby="addproLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addproLabel">
                                Add Product details
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row g-3">
                                <div className="col-12">
                                    <select name="pcat" className='form-select' value={pcat} onChange={(e) => setPcat(e.target.value)}>
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
                                    <input type="text" placeholder='Product Brand' className='form-control' value={pbrand} onChange={(e) => setPbrand(e.target.value)} />
                                </div>
                                <div className="col-12">
                                    <input type="text" placeholder='Product Title' className='form-control' value={ptitle} onChange={(e) => setPtitle(e.target.value)} />
                                </div>
                                <div className="col-12">
                                    <input type="text" placeholder='Product Description' className='form-control' value={pdes} onChange={(e) => setPdes(e.target.value)} />
                                </div>
                                <div className="col-5">
                                    <input type="text" placeholder='Original Price' className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div className="col-2">
                                    <input type="text" placeholder='Rate' className='form-control' />
                                </div>
                                <div className="col-5">
                                    <input type="text" placeholder='Discounted Price' className='form-control' value={discprice} onChange={(e) => setDiscprice(e.target.value)} />
                                </div>
                                <div className="col-12">
                                    <input type="text" placeholder='Image' className='form-control' value={img} onChange={(e) => setImg(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Addmodel
