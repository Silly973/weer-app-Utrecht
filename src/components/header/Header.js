import React from 'react';
import "./Header.css";
import image_Domtoren from "../../assets/gifs/utrecht-domtoren.jpg";
import foto_houten from "../../assets/gifs/Foto_Houten.jpg";




function Header() {

    return <div className="header">
        <div className="title-map">
            <h1 className="title">Het beste weer in de regio Utrecht</h1>
            <img src={image_Domtoren} alt="Domtoren" className="Domtoren"/>


        </div>



    </div>
}

export default Header



