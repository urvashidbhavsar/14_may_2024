import React, { useEffect, useState } from 'react'

const Showdata = () => {
    const [getpro, setGetpro] = useState([]);

    useEffect(() => {
        const getitems = JSON.parse(localStorage.getItem("products"))
        setGetpro(getitems)
    }, [])
    return (
        <>
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
                    </tr>
                </thead>
                <tbody>
                    {
                        getpro.length > 0 ?
                            getpro.map(items => (
                                <tr>
                                    <td>{items.id}</td>
                                    <td>{items.pcat}</td>
                                    <td>{items.ptitle}</td>
                                    <td>{items.pbrand}</td>
                                    <td>{items.pdes}</td>
                                    <td>{items.price}</td>
                                    <td>{items.rate}</td>
                                    <td>{items.discprice}</td>
                                    <td><img src={items.img} style={{ width: "100px", height: "100px", objectFit: "contain" }} /></td>
                                </tr>
                            ))
                            :
                            <tr>
                                <td colSpan={9}>Data Not found</td>
                            </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Showdata
