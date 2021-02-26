import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

const LogIn = () => {
    const [credentials, setCredentials] = useState({
        user
    })
    return (
        <div>
            <p>Hello from Login</p>
        </div>
    )
}

export default LogIn
