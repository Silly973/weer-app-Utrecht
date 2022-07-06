import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/account')



        } catch (e) {
            setError(e.message)
            console.error(e);
            console.log(e.message)

               }
    };

    return (
        <div className="form">
            <div>
                <h2 >Log hier in</h2>
                <p > Nog geen account?{' '}
                    <Link to="/signup" >
                        Klik hier!
                    </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"/>
                </div>
                <div >
                    <label>Wachtwoord:</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
                      {error && <p className="error">Het email adres of wachtwoord is niet juist</p>}
                </div>
                <button className="submit-button">
                    Inloggen
                </button>
            </form>
        </div>
    );
};

export default Signin;