import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    let menus = [
        { pathname: "/home", menu: "Home" },
        { pathname: "/product", menu: "Product" },
    ]
    return (
        <>
            {
                menus.map(menu =>
                    <li className="nav-item" key={menu.pathname}>
                        <Link className="nav-link" to={menu.pathname}>{menu.menu}</Link>
                    </li>
                )
            }
        </>
    )
}

export default List
