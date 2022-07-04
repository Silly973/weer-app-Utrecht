import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import "./Signup.css";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser, currentUser } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/account')
        } catch (e) {
            setError('Failed to create account')
            setError(e.message);
            console.log(e.message);
        }
    };

    return (
        <div className="Signup-container">
            <div>
                <h2>Account aanmaken</h2>
                <p> Heb je al een account?{' '}
                    <Link to='/Login' >
                        Klik hier!
                    </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label>Email: </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Wachtwoord:</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="wachtwoord"
                        id="password"
                    />
                </div>
                {error && <p className="error">Dit account bestaat al. Probeer een ander email adres.</p>}
                <button disabled={currentUser}
                    className="submit-button">
                    Registreer
                </button>
            </form>
        </div>
    );
};

export default Signup;