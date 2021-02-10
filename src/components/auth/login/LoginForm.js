import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LoginForm = () => {
    return (
        <>
            <form>
                <input type="text" placeholder="email" name="email" className="login__input mx-3" autoComplete="off"/>
                <input type="password" placeholder="password" name="password" className="login__input mx-3" autoComplete="off"/>
                <button type="submit" className="mx-10 p-12" >Sign in</button>
                <button className="login__google">
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
