//LoginScreen
import React from 'react'

export const LoginUI = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="email" name="email"></input>
                <input type="password" placeholder="Password" name="password"></input>
                <button type="submit">Sign in</button>
                <hr/>
                Google
            </form>
        </div>
    )
}
