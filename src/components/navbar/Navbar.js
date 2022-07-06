import React, {useContext, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from "../../Context/AuthContext";
import "./Navbar.css"


const Navbar = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            console.log('You are logged out')
        } catch (e) {
            console.log(e.message);
        }
    }

    return (

        <div id="navbar">
            <div id="menu-web">

                <Link to="/" className="menuClass">Home</Link>
                <Link to="/Account" className="menuClass">Account</Link>

            {user?.email ? (

                <button onClick={handleLogout}className="logout-button">Logout</button>
            ) : (

                <Link to='/Login'className="menuClass">Log in</Link>




            )}
        </div>
        </div>

    );
};

export default Navbar;