import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {LocationContext} from '../../Context/LocationContext';
import './Footer.css';

function Footer() {
    const navigate = useNavigate()
    const {goBackHandler} = useContext(LocationContext)
    const day = new Date()
    const year = day.getFullYear()

    function onClickHandler() {
        goBackHandler()
        navigate.goBack()
    }

    return <>
        <div className="footer">

        </div>
        <div className="footer-web" data-testid='footer-1'>

            <div>
                <p>Silvia van Lingen 2022</p>


            </div>
        </div>
    </>
}

export default Footer