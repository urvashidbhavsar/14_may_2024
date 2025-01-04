import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navmenu = ({ MenuItems }) => {
    return (
        <>
            <div className='col-12 col-sm-12 col-lg-4'>
                <ul className='d-flex gap-3 justify-content-end align-items-center m-0 p-0'>
                    {
                        MenuItems.map((items, keys) =>
                            <li key={keys} className='p-2 text-center'>
                                <div>
                                    <FontAwesomeIcon icon={items.icon}></FontAwesomeIcon>
                                </div>
                                <Link to="">{items.menuname}</Link>
                            </li>
                        )
                    }
                </ul>
            </div >
        </>
    )
}

export default Navmenu
