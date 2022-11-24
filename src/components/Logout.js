import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../features/userSlice";

const Logout = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div>
        <h1>
            <span>Welcome {user.name}</span>
            <button onClick={(e) =>
            handleLogout(e)}>Logout</button>
        </h1>
        </div>
    )
}
export default Logout;