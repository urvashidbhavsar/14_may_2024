import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetch_user = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await res.json()
                setUsers(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetch_user();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error...</div>
    }
    return (
        <>
            <ul>
                {
                    users.map((user, key) =>
                        <li key={key}>{user.title}</li>
                    )
                }
            </ul>
        </>
    )
}

export default UserList
