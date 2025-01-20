import React, { useState } from 'react'

const Submenus = ({ subMenuItems }) => {

    const [usemenu, setUsemenu] = useState(null)
    return (
        <>

            <ul className='list-unstyled p-3 m-0 subdropdown'>
                {subMenuItems.map(items =>
                    <li key={items}>{items}</li>
                )
                }
            </ul>

        </>
    )
}

export default Submenus
