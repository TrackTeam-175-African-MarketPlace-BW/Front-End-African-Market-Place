import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: block;
    margin: 1em 2.5em;
`

const Label = styled.label`
    padding-right: 2em;
`

// const 

const FakeLogIn = () => {
    return (
        <Form>
            <Label>
                Email:
                <input 
                    id='email'
                    name='email'
                    type='email'
                    // value=
                    placeholder='enter your login email'
                    // onChange={handleChange}
                />
            </Label>
            <Label>
                Password:
                <input 
                    id='password'
                    name='password'
                    // value={}
                    // onChange={handleChange}
                    placeholder='enter your password'
                />
            </Label>
            <button 
                type="submit"
            >
                log in
            </button>
            {/* <label>
                Email:
                <Input 
                    
                />
            </label> */}
        </Form>
    )
}

export default FakeLogIn;