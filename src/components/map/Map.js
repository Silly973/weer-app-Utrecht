import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Utrecht from "../../assets/gifs/Regio_kaartje.png";
import "./Map.css"





    const Map = (props) => {
        const navigate = useNavigate();

        return (
            <>
                <div className="map">
                    <img src={Utrecht} alt="regio Utrecht"/>

                <h1>Kies hieronder een regio</h1>

                <hr />


                    <div className="buttons">



                <p>
                    <span><button
                        id="Map-button1"
                        type="button"
                        onClick={() => navigate("/UtrechtWestStad")}

                    >Utrecht West / -Stad</button>
                    </span>


                    <span><button
                        id="Map-button2"
                        type="button"
                        onClick={() => navigate("/Lekstroom")}
                    > Lekstroom</button>
                   </span>

                    <span><button
                        id="Map-button3"
                        type="button"
                        onClick={() => navigate("/UtrechtZuidOost")}
                    >Utrecht Zuidoost</button>
                    </span>

                    <span><button
                        id="Map-button4"
                        type="button"
                        onClick={() => navigate("/EemlandVallei")}
                    >Eemland / Vallei</button>
                    </span>




                </p>

                </div>
                </div>

            </>
        );
    };

export default Map;