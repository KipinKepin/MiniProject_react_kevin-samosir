import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser, reset } from '../features/authSlice'

import "../style/Login.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (user || isSuccess) {
            navigate('/home')
        }
        dispatch(reset())
    }, [user, isSuccess, dispatch, navigate])

    const Auth = (e) => {
        e.preventDefault()
        dispatch(LoginUser({ email, password }))
    }

    return (
        <section className='login-section'>
            <div className="form-box">
                <div className="form-value" >
                    <form onSubmit={Auth}>
                        {isError && <div className="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Error! {message}.</span>
                        </div>}
                        <h2>Sign In</h2>
                        <div className="inputbox">
                            <FaEnvelope className='icons' />
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} required
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="inputbox">
                            <FaLock className='icons' />
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button type='submit' className='btn mb-4'>
                            {isLoading ? 'Loading...' : 'Login'}
                        </button>
                        <div className="register">
                            <p className='flex flex-col'>don't have any account?
                                <a href="/">chat admin to regis</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Login