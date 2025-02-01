import React from 'react'
import Navbar from '../Navigation/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Addmodel from './Addmodel'
import Showdata from './Showdata'

const Addproduct = () => {
    return (
        <>
            <Navbar />

            <div className='container-fluid'>
                <h3 className='bg-secondary text-center text-white py-2'>Product Details</h3>
            </div>

            <div className='text-center'>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addpro">
                    <FontAwesomeIcon icon={faPlus} /> Add Product
                </button>
            </div>

            <Addmodel />

            <Showdata />
        </>
    )
}

export default Addproduct
