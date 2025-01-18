import React, { useState } from 'react'

const Submenus = () => {
    const [usemenu, setUsemenu] = useState(null)

    let submenu = ["Web Development", "Mobile Development"]
    return (
        <>
          
                    <ul className='list-unstyled p-3 m-0 subdropdown'>
                        {submenu.map(items =>
                            <li key={items}>{items}</li>
                        )
                        }
                    </ul>
        
        </>
    )
}

export default Submenus
