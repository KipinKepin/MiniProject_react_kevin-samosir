import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut, reset } from '../features/authSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    const logout = () => {
        dispatch(LogOut())
        dispatch(reset())
        navigate('/')
    }

    return (
        <div className="navbar" style={{ width: "100vw", color: "#1dcdbc" }}>
            <div className="flex-1">
                <NavLink to='/home' className="btn btn-ghost normal-case text-xl">
                    <em>
                        &lt;img /&gt;
                    </em>
                </NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    {user && user.role === "admin" && (
                        <li><NavLink to='/users'>Users</NavLink></li>
                    )}
                    <li><NavLink to='/convert'>Convert</NavLink></li>
                    <li><NavLink to='/generate'>Generate</NavLink></li>
                    <li onClick={logout} style={{ cursor: "pointer" }}><NavLink to="/" className='text-error'>Logout</NavLink></li>
                    {/* <li><NavLink to='/contact'>Generate</NavLink></li> */}
                </ul>
            </div>
        </div >
    )
}

export default Navbar