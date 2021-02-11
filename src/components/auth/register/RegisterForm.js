import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterForm = () => {
    return (
        <>
            <form>
                <input type="text" placeholder="name" name="name" className="login__input mx-3" autoComplete="off"/>
                <input type="text" placeholder="email" name="email" className="login__input mx-3" autoComplete="off"/>
                <input type="password" placeholder="password" name="password" className="login__input mx-3" autoComplete="off"/>
                <input type="password2" placeholder="confirm password" name="password2" className="login__input mx-3" autoComplete="off"/>
                <button type="submit" className="mx-10 p-12" >Register</button>
                <Link to="/auth/login" className="login__link">
                    Already registered?
                </Link>
            </form>
        </>
    )
}
