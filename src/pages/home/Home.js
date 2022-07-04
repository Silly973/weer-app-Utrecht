import React from "react";
import {Link} from "react-router-dom";
import image_Domtoren from "../../assets/gifs/utrecht-domtoren.jpg";
import authContext from "../../Context/AuthContext";
import Signup from "../signup/Signup";
import Login from "../login/Login";
import gemeente from "../../assets/gifs/Gemeente urecht 2.jpg"
import "./Home.css";
import Map from "../../components/map/Map";
import {useState} from "react";
import {UserAuth, user} from "../../Context/AuthContext";



function Home() {
  const {currentUser} = UserAuth()
    const [user, setUser] = useState({});

    return <div className="home">

         <div className="home">



     <div className="home-wrapper">

                <div className="pop-up">
                    <div className="welkom">
                        <h3 className="welkom-text">Welkom!</h3>
                        <div className="intro">Wil jij in jouw eigen regio in Utrecht lekker gaan wandelen, fietsen of iets anders gaan doen? Nu kun jij het beste weer in jouw regio bekijken!</div>
                        <br/><div className="intro-2"> Je kiest een regio en dan krijg je jouw top 5 van beste weer in die regio Utrecht. Weet je niet wat je precies wilt gaan doen? Klik dan op de locatie. Hier kun je zien wat er allemaal te doen is in de buurt.</div>
                        <br/> <div className="intro-3">Log <Link to='./Login'>hier</Link>  in of maak snel een <Link to='./Signup'className="Underline">account</Link> aan!
                    </div>


                    </div>

                    <div className="map-home">
                    </div>
                    <div className="web-home">
                        <div className="web-left">
                            <p>Jouw Regio in Utrecht</p>
                            {/* currentuser */}
                            <div className="image-web-home">
                                <img src={gemeente} alt="gemeente-Utrecht" className="map-image"/>
                    </div>
                    </div>
                    </div>
                </div>
        </div>
        </div>
    }
</div>
}

export default Home