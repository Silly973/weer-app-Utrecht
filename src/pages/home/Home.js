import React from "react";
import {Link} from "react-router-dom";
import gemeente from "../../assets/gifs/Gemeente urecht 2.jpg"
import "./Home.css";


function Home() {

    const currentYear = new Date().getFullYear()

    return <div className="home">

     <div className="home-wrapper">

                <div className="pop-up">
                    <div className="welkom">
                        <h3 className="welkom-text">Welkom!</h3>
                        <div className="intro">Wil jij in jouw eigen regio in Utrecht lekker gaan wandelen, fietsen of iets anders gaan doen? Nu kun jij het beste weer in jouw regio bekijken!</div>
                        <br/><div className="intro-2"> Je kiest een regio en dan krijg je jouw top 5 van beste weer in die regio Utrecht. Weet je niet wat je precies wilt gaan doen? Klik dan op de locatie. Hier kun je zien wat er allemaal te doen is in de buurt.</div>
                        <br/> <div className="intro-3">Log snel in of registreer je nu meteen <Link to='./Signup'className="Underline">hier</Link>!
                    </div>


                    </div>

                    <div className="map-home">
                    </div>
                    <div className="web-home">
                        <div className="web-left">
                            <p>Jouw Regio in Utrecht</p>

                            <div className="image-web-home">
                                <img src={gemeente} alt="gemeente-Utrecht" className="map-image"/>
                    </div>
                    </div>
                    </div>
                </div>

        </div>
        <div className="footer">
            <p>Silvia van Lingen {currentYear}</p>
        </div>

</div>
}

export default Home