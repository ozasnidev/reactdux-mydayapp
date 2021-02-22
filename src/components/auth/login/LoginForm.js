import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from '../../../hooks/useForm';
import { loginWithEmailPassword, loginWithGoogle } from '../actions/authActions';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [ values, handleInputChange] = useForm({
        email:'Juan@juan.com',
        password:'123456'
    })
    const{ email, password } = values

    const handleLogin = event => {
        event.preventDefault()
        dispatch(loginWithEmailPassword(email, password))
    }
    const callGoogleLogin = () => {
        dispatch(loginWithGoogle())
    }

    return (
        <>
            <form onSubmit={ handleLogin }>
                <input type="text" placeholder="email" name="email" className="login__input mx-3" autoComplete="off" value={email} onChange={handleInputChange}/>
                <input type="password" placeholder="password" name="password" className="login__input mx-3" autoComplete="off" value={password} onChange={handleInputChange}/>
                <button type="submit" className="mx-10 p-12" >Sign in</button>
                <button className="login__google" onClick={callGoogleLogin} >
                    <FontAwesomeIcon icon={['fab', 'google']} size="2x"/>
                    Sign in with Google
                </button>
                <Link to="/auth/register" className="login__link">
                    Create new account
                </Link>
            </form>
        </>
    )
}
