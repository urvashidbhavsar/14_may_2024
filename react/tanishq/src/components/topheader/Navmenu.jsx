import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

const Navmenu = ({ itemsMenu }) => {
    return (
        <>
            <div className='col-4'>
                <div className="nav">
                    <ul className='d-flex gap-2 align-items-center m-0 p-0'>
                        {
                            itemsMenu.map((items, keys) =>
                                <li key={keys}><Link to="">{items}</Link></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navmenu
