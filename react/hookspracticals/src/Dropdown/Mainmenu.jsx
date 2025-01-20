import React, { useState } from 'react'
import Submenus from './Submenus'

const Mainmenu = () => {
    const [usemenu, setUsemenu] = useState(null)
    const handleEvent = (e) => {
        setUsemenu(e)
    }

    let submenu = ["Web Development", "Mobile Development"]
    // let submenu2 = [];
    return (
        <>
            <li className='p-3'>Home</li>
            <li className='p-3 mydropdown' onClick={() => handleEvent("services")}>
                Services
                {
                    usemenu === "services" && (<Submenus subMenuItems={submenu} />)
                }
            </li>
            <li className='p-3 mydropdown' onClick={() => handleEvent("about")}>
                About
                {
                    usemenu === "about" && (
                        <ul className='list-unstyled p-3 m-0 subdropdown'>
                            <li>Our Carrer</li>
                            <li>Our Team</li>
                            <li>Our Story</li>
                        </ul>
                    )
                }
            </li>
            <li className='p-3'>Contact</li>
        </>
    )
}

export default Mainmenu
