import React from 'react'

const List = () => {
    var mylist = ["List 1", "List 2", "List 3", "List 4", "List 5"]
    return (
        <>
            <ul>
                {
                    mylist.map(item =>
                        <li>{item}</li>
                    )
                }
            </ul>
        </>
    )
}

export default List
