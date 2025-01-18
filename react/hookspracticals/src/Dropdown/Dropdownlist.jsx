import React, { useState } from 'react'
import './drop.css'
import Mainmenu from './Mainmenu'

const Dropdownlist = () => {
    return (
        <>
            <header className='py-3 px-5 bg-primary-subtle'>
                <ul className='list-unstyled d-flex gap-2 m-0'>
                    <Mainmenu />
                </ul>
            </header>
        </>
    )
}

export default Dropdownlist
