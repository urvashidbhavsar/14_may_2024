import React from 'react'
import useFetch from './useFetch'

const FetchApi = () => {
    const [data] = useFetch("https://fakestoreapi.com/products")

    return (
        <>
            <table border={1} className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Categories</th>
                        <th>Image</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data &&
                        data.map(items =>
                            <tr key={items.id}>
                                <td>{items.id}</td>
                                <td>{items.title}</td>
                                <td>{items.price}</td>
                                <td>{items.description}</td>
                                <td>{items.category}</td>
                                <td><img src={items.image} alt="" height={100} width={100} /></td>
                                <td>{items.rating.rate}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default FetchApi
