import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'

export const RegisterForm = () => {
    const [ formData, handleInputChange ] = useForm({
        name: 'Juan',
        email:'juang@juan.es',
        password: '123456',
        password2: '123456'
    })
    const { name, email, password, password2 } = formData
    const handleRegister = (event) => {
        event.preventDefault()

    }

    return (
        <>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="name" name="name" className="login__input mx-3" autoComplete="off" value={name} onChange={handleInputChange}/>
                <input type="text" placeholder="email" name="email" className="login__input mx-3" autoComplete="off" value={email} onChange={handleInputChange}/>
                <input type="password" placeholder="password" name="password" className="login__input mx-3" autoComplete="off" value={password} onChange={handleInputChange}/>
                <input type="password" placeholder="confirm password" name="password2" className="login__input mx-3" autoComplete="off"value={password2} onChange={handleInputChange}/>
                <button type="submit" className="mx-10 p-12" >Register</button>
                <Link to="/auth/login" className="login__link">
                    Already registered?
                </Link>
            </form>
        </>
    )
}
