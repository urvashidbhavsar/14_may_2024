import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

const Bottomnav = () => {
    let menus = ["all jewellery", "gold", "Dimand", "earrings", "ring", "Digital gold", "mia", "collection", "wedding", "gifting", "golden harvest", "more"]
    return (
        <>
            <div className="container py-2">
                <ul className='d-flex justify-content-between'>
                    {
                        menus.map((items, key) =>
                            <li key={key} className='text-uppercase'><Link>{items}</Link></li>
                        )
                    }
                </ul>

                <div className='d-none'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </>
    )
}

export default Bottomnav
