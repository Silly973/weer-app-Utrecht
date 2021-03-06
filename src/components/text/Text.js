import React, {useState} from 'react';
import {RiRocketLine, RiArrowRightSFill} from "react-icons/ri";
import './Text.css';
import {UserAuth} from "../../Context/AuthContext";





function Text() {
   const {currentUser} = UserAuth()

    return <div className="text">

        <h2 className="text-h2">Wil je weten waar je op dit moment het beste weer hebt in de regio Utrecht?</h2>
         <div className="alinea-text">

               <div>
                  <p id="een" className="alinea"></p>
              </div>

                <p id="een" className="alinea"><span className="arrow"><RiArrowRightSFill/> </span>Je ziet hiernaast de top 5 locaties van de door jouw gekozen regio</p>
                <p id="twee" className="alinea">of</p>
                <p id="drie" className="alinea"><span className="arrow"><RiArrowRightSFill/> </span>Klik op
                    de <RiRocketLine id="rocket-button-text"/> voor de Top 5 locaties in heel Utrecht </p>

                <p id="vier" className="alinea"><span className="arrow"><RiArrowRightSFill/> </span>Kies voor een weer booster</p>
                <p id="vijf" className="alinea"><span className="arrow"><RiArrowRightSFill/> </span>Klik vervolgens op een locatie voor leuke uitjes of bezienswaardigheden!</p>
            </div>

            <div className="Link-to-Page">


            </div>



    </div>
}

export default Text