import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../features/userSlice";

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const dispatch = useDispatch();
    dispatch(
        login({
            name:name,
            email:email,
            password:password,
            loggedIn:true
        })
    )

    return (
        <div className="login">
        <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
        <h1> Login </h1>
            <input type="name" placeholder="Name" value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </form>
            <button type="submit" className="submitButton">
                Login
            </button>
        </div>
    )
}
export default Login;