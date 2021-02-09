//LoginScreen
import React from 'react'

export const LoginUI = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button type="submit">Sign in</button>
                <hr/>
                <div 
                    className="router__google"
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            </form>
        </div>
    )
}
