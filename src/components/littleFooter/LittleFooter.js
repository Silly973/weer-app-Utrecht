import React, {useContext} from 'react';
import {RiArrowGoBackFill, RiHome2Line, RiRocketLine} from "react-icons/ri";
import {Link, useNavigate} from "react-router-dom";
import './LittleFooter.css';
import {LocationContext} from "../../Context/LocationContext";


function LittleFooter() {
    const {goBackHandler} = useContext(LocationContext)
    const navigate = useNavigate()

    function onClickHandler() {
        goBackHandler()
        navigate.goBack()

        function backHandler(){

        }
    }

    return <>

        <div className="little-footer">

            <p className="icon" id="arrow-button" onClick={()=> navigate(-1)}><RiArrowGoBackFill/></p>
            <Link to="/">
                <p className="icon" id="home-button" onClick={goBackHandler}><RiHome2Line/></p>
            </Link>
            <Link to='/Utrecht'>
                <p className="icon" id="rocket-button" onClick={goBackHandler}><RiRocketLine/></p>
            </Link>
        </div>

    </>
}

export default LittleFooter