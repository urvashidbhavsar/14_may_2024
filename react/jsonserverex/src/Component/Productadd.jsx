import React, { useState } from 'react'

const Productadd = ({ productadd }) => {
    const catlist = ["Haircare", "Skincare", "Makeup"]

    const [input, setInput] = useState({
        id: "",
        category: "",
        brand: "",
        title: "",
        description: "",
        oldprice: "",
        rate: "",
        newprice: "",
        image: "",
    })
    const handleupdate = (e) => {
        const updateData = { ...input, [e.target.name]: e.target.value }

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
        setInput(updateData)
    }

    const handleEvent = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3000/products", {
            method: "POST",
            body: JSON.stringify(input)
        })

        if (response.ok) {
            alert("product added successfully")
            setInput({
                id: "",
                category: "",
                brand: "",
                title: "",
                description: "",
                oldprice: "",
                rate: "",
                newprice: "",
                image: "",
            })
            productadd()
        } else {
            alert("Data not submitted")
        }
    }
    console.log(input.newprice)
    console.log(input.rate)
    console.log(input.oldprice)

    return (
        <>
            <div className="container">
                <h4 className='border-bottom border-2 border-success pb-2'>Add Product</h4>
                <form>
                    <div className="row g-3">
                        <div className="col-3">
                            <input type="number" className='form-control' placeholder='Enter Id' name="id" value={input.id} onChange={handleupdate} />
                        </div>
                        <div className="col-3">
                            <select name="category" className='form-select' value={input.category} onChange={handleupdate}>
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
                        <div className="col-3">
                            <input type="text" className='form-control' placeholder='Brand' value={input.brand} onChange={handleupdate} name="brand" />
                        </div>
                        <div className="col-3">
                            <input type="text" className='form-control' placeholder='title' value={input.title} onChange={handleupdate} name="title" />
                        </div>
                        <div className="col-3">
                            <input type="text" className='form-control' placeholder='Description' value={input.description} onChange={handleupdate} name="description" />
                        </div>
                        <div className="col-3">
                            <input type="number" className='form-control' placeholder='Old Price' value={input.oldprice} onChange={handleupdate} name="oldprice" />
                        </div>
                        <div className="col-3">
                            <input type="number" className='form-control' placeholder='Rate' value={input.rate} onChange={handleupdate} name="rate" />
                        </div>
                        <div className="col-3">
                            <input type="number" className='form-control' placeholder='New Price' value={input.newprice} onChange={handleupdate} name="newprice" />
                        </div>
                        <div className="col-9">
                            <input type="text" className='form-control' placeholder='Image URL' value={input.image} onChange={handleupdate} name="image" />
                        </div>
                        <div className="col-3">
                            <button type='submit' className='btn btn-success w-100' onClick={handleEvent}>Add</button>
                        </div>
                    </div>
                </form>
                <hr />
            </div>
        </>
    )
}

export default Productadd
