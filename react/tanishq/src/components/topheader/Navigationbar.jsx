import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Navmenu from './Navmenu'

const Navigationbar = () => {
    let menus = ["Dimand", "Stores", "Account", "Wishlist", "Cart"]
    return (
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <Logo />
                        <Search />
                        <Navmenu itemsMenu={menus} />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navigationbar
