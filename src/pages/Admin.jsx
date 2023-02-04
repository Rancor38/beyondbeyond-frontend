import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const payload = {
        username: `${username}`,
        password: `${password}`
    }

    const logIn = (e) => {
        e.preventDefault()
        axios.post('https://beyondbeyond.up.railway.app/auth/login', payload).then((res) => {
            localStorage.setItem("IAmLogged?", res.data.isLoggedIn)
        });
        if (localStorage.getItem('IAmLogged?')) {
            navigate('/')
        }
};
    
    useEffect(() => {
        localStorage.removeItem('IAmLogged?')
    }, [])

    const handleChange = (e) => {
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        }
        else return
    }

    // make a handlesubmit to run the axios post to respond with the jwt token to log in

    

    return (
        <form onSubmit={logIn}>
            <label htmlFor="Username">
                <input type="text" name='username' id='username' placeholder='username' onChange={handleChange}/>
            </label>
            <label htmlFor='Password'>
                <input type="password" name="password" id="password" placeholder='password' onChange={handleChange} />
                <input type="submit" />
            </label>
        </form>
    );
};

export default Admin;