import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import "./Account.css"


const Account = () => {
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
    };

    return (
        <div className="Account-container">
            <h2>Account</h2>
            <p>Email gebruiker: {user && user.email}</p>
            <p>Klik op de knop "ga verder" om jouw regio te kiezen.</p>

            <button onClick={handleLogout} className="button">
                Logout
            </button>

            <button className="button"
                type="button"
                onClick={() => navigate("/Map")}
            >
                Ga verder

            </button>

        </div>
    );
};

export default Account;