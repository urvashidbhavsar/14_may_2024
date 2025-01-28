import React from 'react'

const List = ({ menuItems }) => {
    return (
        <>
            {
                menuItems.map(menu =>
                    <li className="nav-item" key={menu}>
                        <a className="nav-link" href="">{menu}</a>
                    </li>
                )
            }
        </>
    )
}

export default List
