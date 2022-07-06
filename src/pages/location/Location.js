import React from 'react';
//import {LocationContext} from "../../Context/LocationContext";
import {useParams} from 'react-router-dom';
import LittleFooter from "../../components/littleFooter/LittleFooter";
import Text from "../../components/text/Text";
import placesData from "../../PlacesData/places.json";
import './Location.css';


function Location() {


    const {slug} = useParams()

 //   const {
 //      locationsUtrechtWestStad,
 //       locationsLekstroom,
 //       locationsUtrechtZuidOost,
 //       locationsEemlandVallei
  //  } = useContext(LocationContext)

  //  const UtrechtLocations = [locationsUtrechtWestStad]
  //      .concat(locationsLekstroom)
  //      .concat(locationsUtrechtZuidOost)
  //      .concat(locationsEemlandVallei)


   // const specificLocation = UtrechtLocations.find((location, index) => {
     //   return location === slug


  //  })

    const specificPlace = placesData.find((place) => {
        return place.id === slug


    })

    return <div className="single-location">

        <div className="web-home">
            <div className="web-left">
                <div className="single-location-web">

                    <p>Dit is er te doen in:
                       <h2> {specificPlace && specificPlace.location}</h2>
                    </p>


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
