import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users')
        setUsers(response.data)
    }

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`)
        getUsers()
    }

    return (
        <div style={{
            background: "#008170",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            borderRadius: '15px'
        }} className='py-4'>
            <h2 className='text-3xl text-white font-bold'>Users</h2>
            <h2 className='underline'><em>List of Users</em></h2>
            <Link to={'/users/add'} style={{ textTransform: 'initial' }} className='btn addUser'>+ Add a New User</Link>
            <table className='table'>
                <thead>
                    <tr style={{ color: "#fff", fontSize: "larger" }}>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={{ color: "#fff" }}>
                    {users.map((user, index) => (
                        <tr key={user.uuid}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td className='flex gap-3'>
                                <Link to={`/users/${user.uuid}`} className="btn btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: "#2465d6", width: "20px", height: '100%', cursor: 'pointer' }}>
                                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                                    </svg>
                                </Link>
                                <button
                                    className="btn btn-circle"
                                    onClick={() => deleteUser(user.uuid)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ fill: "#f00", width: "20px", height: '100%', cursor: 'pointer' }}>
                                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default UserList