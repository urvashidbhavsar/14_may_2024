import React from 'react'
import Listname from './Listname'

const List = () => {
    var mylist = ["List 1", "List 2", "List 3", "List 4", "List 5"]
    return (
        <>
            <ul>
                <Listname list={mylist} />
            </ul>
        </>
    )
}

export default List
