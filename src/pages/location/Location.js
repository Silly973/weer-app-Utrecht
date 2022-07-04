import React, {useContext} from 'react';
import {LocationContext} from "../../Context/LocationContext";
import {useParams} from 'react-router-dom';
import Counter from "../../components/counter/Counter";
import LittleFooter from "../../components/littleFooter/LittleFooter";
import Text from "../text/Text";
import {RiHeartLine} from "react-icons/ri";
import placesData from "../../PlacesData/places.json";
import './Location.css';


function Location() {


    const {slug} = useParams()

    const {
        locationsUtrechtWestStad,
        locationsLekstroom,
        locationsUtrechtZuidOost,
        locationsEemlandVallei
    } = useContext(LocationContext)

    const UtrechtLocations = [locationsUtrechtWestStad]
        .concat(locationsLekstroom)
        .concat(locationsUtrechtZuidOost)
        .concat(locationsEemlandVallei)


    const specificLocation = UtrechtLocations.find((location, index) => {
        return location === slug

    })

    const specificPlace = placesData.find((place) => {
        return place.id === slug


    })

    return <div className="single-location">
        <div className="single-location-mobile">
            <Counter
                index={<RiHeartLine/>}
                key={specificLocation && specificLocation.locationID}
                location={specificLocation && specificLocation}
                clouds={specificLocation && specificLocation.locationClouds}
                wind={specificLocation && specificLocation.locationWind}
                temp={specificLocation && specificLocation.locationTemp}
            />

        </div>

        <div className="web-home">
            <div className="web-left">
                <div className="single-location-web">




                </div>

                <div className="plaatsen-web">
                    <img
                        className="places-image"
                        src={specificPlace && specificPlace.image} alt="plaats"/>
                    <h2>{specificPlace && specificPlace.name}</h2>
                    <p>{specificPlace && specificPlace.address}</p>
                    <p> {specificPlace && specificPlace.zipcode}</p>
                    <p>{specificPlace && specificPlace.location}</p>
                    <a href ={specificPlace.website}target="_blank" rel="noreferrer">Website</a>
                    <p>email: {specificPlace && specificPlace.email}</p>
                </div>
                <LittleFooter/>
            </div>
            <div className="web-right">
                <Text/>
            </div>
        </div>
    </div>
}

export default Location
