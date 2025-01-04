import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Navmenu from './Navmenu'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navigationbar = () => {
    let menus = [
        { icon: faGem, menuname: "Dimand" },
        { icon: faStore, menuname: "Stores" },
        { icon: faUser, menuname: "Account" },
        { icon: faHeart, menuname: "Wishlist" },
        { icon: faCartShopping, menuname: "Cart" },
    ]
    return (
        <>
            <header className='bg-danger-subtle'>
                <div className="container py-2">
                    <div className="row align-items-center">
                        <Logo />
                        <Search />
                        <Navmenu MenuItems={menus} />
                        {/* <Navmenu /> */}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navigationbar
