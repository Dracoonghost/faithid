import React from 'react'

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  })
  const users = await res.json()
  return (
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {
                users.map((user:any) => <li key={user.id}>{user.name}</li>)
            }
        </ul>
    </>
  )
}

export default UsersPage