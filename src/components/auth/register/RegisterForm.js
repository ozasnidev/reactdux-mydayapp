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
        if(isUserDataValid()){
            console.log("Formulario correcto")
        }

    }
    const isUserDataValid = () => {
        const numInUserNameRegex = /[0-9]/
        const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if( name.trim().length === 0 || numInUserNameRegex.test(name)){
            console.log("Error");
            return false;
        }else if(!emailRegexPattern.test(email)){
            console.log("Invalid email");
            return false;
        }else if( password !== password2){
            console.log("Passwords must to match each other");
            return false;
        }else if(password.length < 6 && password2.length < 6){
            console.log("Passwords must at least to have 6 characters")
            return false
        }
        return true
    }

    return (
        <>
            <form onSubmit={handleRegister}>
                <div className="alert__error m-10"> Hola Mundo </div>
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
