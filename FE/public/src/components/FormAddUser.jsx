import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../style/AddUser.css'
import axios from 'axios'

const FormAddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [role, setRole] = useState("")
    const [msg, setMsg] = useState("")

    const navigate = useNavigate()

    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                role: role
            })
            navigate('/users')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div className='user'>
            <h2 className="text-xl">Users</h2>
            <h2>Add New User</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={saveUser}>
                        {msg && <div className="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Error! {msg}.</span>
                        </div>}
                        <div className="input-box">
                            <input
                                className='input input-accent mb-2'
                                placeholder='name'
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="name" className='label'>Name</label>
                        </div>
                        <div className="input-box">
                            <input
                                className='input input-accent mb-2'
                                placeholder='type a valid email'
                                type="email" id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email" className='label'>Email</label>
                        </div>
                        <div className="input-box">
                            <input
                                className='input input-bordered input-accent mb-2'
                                placeholder='password'
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password" className='label'>Password</label>
                        </div>
                        <div className="input-box">
                            <input
                                className='input input-bordered input-accent mb-2'
                                placeholder='confirm password'
                                type="password"
                                id="confPassword"
                                value={confPassword}
                                onChange={(e) => setConfPassword(e.target.value)}
                            />
                            <label htmlFor="confPassword" className='label'>Confirm Password</label>
                        </div>
                        <div className="input-box">
                            <div className="form-control w-full max-w-xs">
                                <label htmlFor="role" className='label'>role</label>
                                <select
                                    className="select select-bordered select-accent"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option disabled selected>Role</option>
                                    <option>Admin</option>
                                    <option>User</option>
                                </select>
                            </div>
                        </div>
                        <div className="card-actions justify-between">
                            <Link to={'/users'} className='btn btn-error'>Back</Link>
                            <button type='submit' className="btn btn-success">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormAddUser