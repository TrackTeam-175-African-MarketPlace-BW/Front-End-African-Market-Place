import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import axiosWithAuth from '../utils/axiosWithAuth'
// import { updatedPassword } from '../actions/ownerActions'

const Form = styled.form`
    display: block;
    margin: 0rem 0rem 0rem;
`

const Label = styled.label`
    padding-right: 2em;
    float: right;
`

const FormSection = styled.span`
    padding-right: .5em;
`

const Button = styled.button`
    background-color: rgb(165, 70, 35);
    color: white;
    border: 1px solid black;
    padding-left: 1em;
    padding-right: 1em;
`

const Error = styled.span`
    padding-left: .5em;
    color: red;
`

const NavigationLogin = () => {

    const [ credentials, setCredentials ] = useState({
        email: '',
        password: '',        
    })
    const [ error, setError ] = useState("")
    const { push } = useHistory()

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('/users/login', credentials)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                push(`${res.data.user.id}/ownerProfile`)
            })
            .catch((err) => {
                console.log(
                    setError(err.response.data.message)
                )
            })
    }

    return (
        <Form onSubmit={handleLogin}>
            <Label htmlFor='email'>
                <FormSection>Email:</FormSection>
                <input 
                    id='email'
                    name='email'
                    type='email'
                    value={credentials.email}
                    placeholder='enter your login email'
                    onChange={handleChange}
                />
            </Label><br />
            <Label htmlFor='password'>
                <FormSection>Password:</FormSection>
                <input 
                    id='password'
                    name='password'
                    type='password'
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder='enter your password'
                />
            </Label><br />
            <Button 
                type="submit"
            >
                log in
            </Button>
            {error && (
                <Error>
                    {error} please try again or{" "}<NavLink to="/register">make an account</NavLink>
                </Error>
            )}
            {/* <label>
                Email:
                <Input 
                    
                />
            </label> */}
        </Form>
    )
}

export default NavigationLogin