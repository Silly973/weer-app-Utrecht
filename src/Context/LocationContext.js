/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useEffect, useState,} from 'react';
import axios from 'axios';
import kelvinToCelsius from "../helpers/kelvinToCelsius";

export const LocationContext = createContext({})



function LocationContextProvider({children}) {
    const [locationsUtrechtWestStad, setLocationsUtrechtWestStad] = useState([])
    const [locationsLekstroom, setLocationsLekstroom] = useState([])
    const [locationsUtrechtZuidOost, setLocationsUtrechtZuidOost] = useState([])
    const [locationsEemlandVallei, setLocationsEemlandVallei] = useState([])

    const [boosterCloudsSelected, toggleBoosterCloudsSelected] = useState(false)
    const [boosterTempSelected, toggleBoosterTempSelected] = useState(false)
    const [boosterWindSelected, toggleBoosterWindSelected] = useState(false)
    const [multiplierClouds, setMultiplierClouds] = useState(1)
    const [multiplierTemp, setMultiplierTemp] = useState(1)
    const [multiplierWind, setMultiplierWind] = useState(1)






    function boosterCloud() {
        if (!boosterCloudsSelected) {
            toggleBoosterCloudsSelected(true)
            setMultiplierClouds(2)
        } else {
            toggleBoosterCloudsSelected(false)
            setMultiplierClouds(1)
        }
    }


    function boosterWind() {
        if (!boosterWindSelected) {
            toggleBoosterWindSelected(true)
            setMultiplierWind(2)
        } else {
            toggleBoosterWindSelected(false)
            setMultiplierWind(1)
        }
    }


    function boosterTemp() {
        if (!boosterTempSelected) {
            toggleBoosterTempSelected(true)
            setMultiplierTemp(2)
        } else {
            toggleBoosterTempSelected(false)
            setMultiplierTemp(1)
        }
    }

    function goBackHandler() {
        toggleBoosterCloudsSelected(false)
        toggleBoosterTempSelected(false)
        toggleBoosterWindSelected(false)
        setMultiplierClouds(1)
        setMultiplierWind(1)
        setMultiplierTemp(1)
    }

    useEffect(() => {
        if (multiplierClouds || multiplierTemp || multiplierWind) {
            fetchLocations();
        }
    }, [multiplierClouds, multiplierTemp, multiplierWind])


    function getPointsClouds(clouds) {

        if (clouds < 10) {
            return 11 * multiplierClouds;
        }
        if (clouds >= 10 && clouds < 15) {
            return 10 * multiplierClouds;
        }
        if (clouds >= 15 && clouds < 20) {
            return 9 * multiplierClouds;
        }
        if (clouds >= 20 && clouds < 30) {
            return 8 * multiplierClouds;
        }
        if (clouds >= 30 && clouds < 40) {
            return 7 * multiplierClouds;
        }
        if (clouds >= 40 && clouds < 50) {
            return 6 * multiplierClouds;
        }
        if (clouds >= 50 && clouds < 60) {
            return 5 * multiplierClouds;
        }
        if (clouds >= 60 && clouds < 70) {
            return 4 * multiplierClouds;
        }
        if (clouds >= 70 && clouds < 80) {
            return 3 * multiplierClouds;
        }
        if (clouds >= 80 && clouds < 90) {
            return 2 * multiplierClouds;
        }
        if (clouds >= 90 && clouds < 100) {
            return multiplierClouds;
        }
        if (clouds >= 100) {
            return 0;
        }
    }

    function getPointsWind(wind) {
        if (wind < 0.3) {
            return 14 * multiplierWind;
        }
        if (wind >= 0.3 && wind < 1.5) {
            return 13 * multiplierWind;
        }
        if (wind >= 1.5 && wind < 3.3) {
            return 12 * multiplierWind;
        }
        if (wind >= 3.3 && wind < 5.5) {
            return 10 * multiplierWind;
        }
        if (wind >= 5.5 && wind < 8.0) {
            return 8 * multiplierWind;
        }
        if (wind >= 8.0 && wind < 10.8) {
            return 6 * multiplierWind;
        }
        if (wind >= 10.8 && wind < 13.9) {
            return 5 * multiplierWind;
        }
        if (wind >= 13.9 && wind < 17.2) {
            return 4 * multiplierWind;
        }
        if (wind >= 17.2 && wind < 20.7) {
            return 3 * multiplierWind;
        }
        if (wind >= 20.7 && wind < 24.5) {
            return 2 * multiplierWind;
        }
        if (wind > 24.5) {
            return multiplierWind;
        }
    }

    function getPointsTemp(temp) {
        if (temp < 0) {
            return 0;
        }
        if (temp >= 0 && temp < 1) {
            return multiplierTemp;
        }
        if (temp >= 1 && temp < 2) {
            return 2 * multiplierTemp;
        }
        if (temp >= 2 && temp < 3) {
            return 3 * multiplierTemp;
        }
        if (temp >= 3 && temp < 4) {
            return 4 * multiplierTemp;
        }
        if (temp >= 4 && temp < 5) {
            return 5 * multiplierTemp;
        }
        if (temp >= 5 && temp < 6) {
            return 6 * multiplierTemp;
        }
        if (temp >= 6 && temp < 7) {
            return 7 * multiplierTemp;
        }
        if (temp >= 7 && temp < 8) {
            return 8 * multiplierTemp;
        }
        if (temp >= 8 && temp < 9) {
            return 9 * multiplierTemp;
        }
        if (temp >= 9 && temp < 10) {
            return 10 * multiplierTemp;
        }
        if (temp >= 10 && temp < 11) {
            return 11 * multiplierTemp;
        }
        if (temp >= 11 && temp < 12) {
            return 12 * multiplierTemp;
        }
        if (temp >= 12 && temp < 13) {
            return 13 * multiplierTemp;
        }
        if (temp >= 13 && temp < 14) {
            return 14 * multiplierTemp;
        }
        if (temp >= 14 && temp < 15) {
            return 15 * multiplierTemp;
        }
        if (temp >= 15 && temp < 16) {
            return 16 * multiplierTemp;
        }
        if (temp >= 16 && temp < 17) {
            return 17 * multiplierTemp;
        }
        if (temp >= 17 && temp < 18) {
            return 18 * multiplierTemp;
        }
        if (temp >= 18 && temp < 19) {
            return 19 * multiplierTemp;
        }
        if (temp >= 19 && temp < 20) {
            return 20 * multiplierTemp;
        }
        if (temp >= 20 && temp < 21) {
            return 21 * multiplierTemp;
        }
        if (temp >= 21 && temp < 22) {
            return 22 * multiplierTemp;
        }
        if (temp >= 22 && temp < 23) {
            return 23 * multiplierTemp;
        }
        if (temp >= 23 && temp < 24) {
            return 24 * multiplierTemp;
        }
        if (temp >= 24 && temp < 25) {
            return 25 * multiplierTemp;
        }
        if (temp >= 25 && temp < 26) {
            return 26 * multiplierTemp;
        }
        if (temp >= 26 && temp < 27) {
            return 27 * multiplierTemp;
        }
        if (temp >= 27 && temp < 28) {
            return 28 * multiplierTemp;
        }
        if (temp >= 28 && temp < 29) {
            return 29 * multiplierTemp;
        }
        if (temp >= 29 && temp < 30) {
            return 30 * multiplierTemp;
        }
        if (temp >= 30 && temp < 31) {
            return 31 * multiplierTemp;
        }
        if (temp >= 31 && temp < 32) {
            return 32 * multiplierTemp;
        }
        if (temp >= 32 && temp < 33) {
            return 33 * multiplierTemp;
        }
        if (temp >= 33 && temp < 34) {
            return 34 * multiplierTemp;
        }
        if (temp >= 34 && temp < 35) {
            return 35 * multiplierTemp;
        }
        if (temp >= 35) {
            return 36 * multiplierTemp;
        }
    }










 //useEffect(() => {
 //    const fetchLocations = async () => {
async function fetchLocations(){

         try {

             const resUtrechtWestStad = await Promise.all([

                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2745912&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2744248&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2748979&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2750815&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2751316&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),

             ]);



             const resLekstroom = await Promise.all([
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2753557&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2750325&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2753355&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2751435&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2745580&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),


             ]);


             const resUtrechtZuidOost = await Promise.all([
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2757783&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2743977&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2758106&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2744483&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2756685&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
             ]);


             const resEemlandVallei = await Promise.all([
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2759821&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2758104&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2747034&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2744163&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
                 await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=2745774&appid=${process.env.REACT_APP_API_KEY}&lang=nl`),
             ]);


             const dataUtrechtWestStad = resUtrechtWestStad.map((res) => res.data);
             const dataLekstroom = resLekstroom.map((res) => res.data);
             const dataUtrechtZuidOost = resUtrechtZuidOost.map((res) => res.data);
             const dataEemlandVallei = resEemlandVallei.map((res) => res.data);


             const locationsUtrechtWestStadWithPoints = dataUtrechtWestStad.map((location, index) => {
                 if (location.name === "Mijdrecht") {
                     return {
                         locationName: 'Ronde Venen',
                         locationTemp: location.main.temp,
                         locationClouds: location.clouds.all,
                         locationWind: location.wind.speed,
                         locationDescription: location.weather[0].description,
                         locationID: location.id,
                         locationIcon: location.weather[0].icon,
                         region: 'Utrecht West / -Stad',
                         totalPointsClouds: getPointsClouds(location.clouds.all),
                         totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                         totalPointsWind: getPointsWind(location.wind.speed),
                         totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                     }
                 }
                 if (location.name === "Utrecht") {
                     return {
                         locationName: 'Utrecht Stad ',
                         locationTemp: location.main.temp,
                         locationClouds: location.clouds.all,
                         locationWind: location.wind.speed,
                         locationDescription: location.weather[0].description,
                         locationID: location.id,
                         locationIcon: location.weather[0].icon,
                         region: 'Utrecht West / -Stad',
                         totalPointsClouds: getPointsClouds(location.clouds.all),
                         totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                         totalPointsWind: getPointsWind(location.wind.speed),
                         totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                     }
                 }


                 if (location.name === "Maarssen") {
                     return {
                         locationName: 'Stichtse Vecht',
                         locationTemp: location.main.temp,
                         locationClouds: location.clouds.all,
                         locationWind: location.wind.speed,
                         locationDescription: location.weather[0].description,
                         locationID: location.id,
                         locationIcon: location.weather[0].icon,
                         region: 'Utrecht West / -Stad',
                         totalPointsClouds: getPointsClouds(location.clouds.all),
                         totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                         totalPointsWind: getPointsWind(location.wind.speed),
                         totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                     }
                 }

                 return {
                     locationName: location.name,
                     locationTemp: location.main.temp,
                     locationClouds: location.clouds.all,
                     locationWind: location.wind.speed,
                     locationDescription: location.weather[0].description,
                     locationID: location.id,
                     locationIcon: location.weather[0].icon,
                     region: 'Utrecht West /-Stad',
                     totalPointsClouds: getPointsClouds(location.clouds.all),
                     totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                     totalPointsWind: getPointsWind(location.wind.speed),
                     totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                 }

             })
             setLocationsUtrechtWestStad(locationsUtrechtWestStadWithPoints)

             const locationsLekstroomWithPoints = dataLekstroom.map((location, index) => {
                 if (location.name === "Vianen") {
                     return {
                         locationName: "Vijfheerenlanden",
                         locationTemp: location.main.temp,
                         locationClouds: location.clouds.all,
                         locationWind: location.wind.speed,
                         locationDescription: location.weather[0].description,
                         locationID: location.id,
                         locationIcon: location.weather[0].icon,
                         region: 'Lekstroom',
                         totalPointsClouds: getPointsClouds(location.clouds.all),
                         totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                         totalPointsWind: getPointsWind(location.wind.speed),
                         totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),

                     }
                 }

                 return {
                     locationName: location.name,
                     locationTemp: location.main.temp,
                     locationClouds: location.clouds.all,
                     locationWind: location.wind.speed,
                     locationDescription: location.weather[0].description,
                     locationID: location.id,
                     locationIcon: location.weather[0].icon,
                     region: 'Lekstroom',
                     totalPointsClouds: getPointsClouds(location.clouds.all),
                     totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                     totalPointsWind: getPointsWind(location.wind.speed),
                     totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                 }
             })
             setLocationsLekstroom(locationsLekstroomWithPoints)


             const locationsUtrechtZuiOostWithPoints = dataUtrechtZuidOost.map((location, index) => {
                 return {
                     locationName: location.name,
                     locationTemp: location.main.temp,
                     locationClouds: location.clouds.all,
                     locationWind: location.wind.speed,
                     locationDescription: location.weather[0].description,
                     locationID: location.id,
                     locationIcon: location.weather[0].icon,
                     region: 'Utrecht Zuidoost',
                     totalPointsClouds: getPointsClouds(location.clouds.all),
                     totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                     totalPointsWind: getPointsWind(location.wind.speed),
                     totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                 }
             })
             setLocationsUtrechtZuidOost(locationsUtrechtZuiOostWithPoints)


             const locationsEemlandValleiWithPoints = dataEemlandVallei.map((location, index) => {
                 if (location.name === "Rhenen") {
                     return {
                         locationName: "Rhenen",
                         locationTemp: location.main.temp,
                         locationClouds: location.clouds.all,
                         locationWind: location.wind.speed,
                         locationDescription: location.weather[0].description,
                         locationID: location.id,
                         locationIcon: location.weather[0].icon,
                         region: 'Eemland / Vallei',
                         totalPointsClouds: getPointsClouds(location.clouds.all),
                         totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                         totalPointsWind: getPointsWind(location.wind.speed),
                         totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),

                     }
                 }

                 if (location.name === "Veenendaal") {
                     return {
                         locationName: 'Veenendaal',
                         locationTemp: location.main.temp,
                         locationClouds: location.clouds.all,
                         locationWind: location.wind.speed,
                         locationDescription: location.weather[0].description,
                         locationID: location.id,
                         locationIcon: location.weather[0].icon,
                         region: 'Eemland / Vallei',
                         totalPointsClouds: getPointsClouds(location.clouds.all),
                         totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                         totalPointsWind: getPointsWind(location.wind.speed),
                         totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),

                     }
                 }
                 if (location.name === "Bunschoten-Spakenburg") {
                     return {
                         locationName: 'Bunschoten',
                         locationTemp: location.main.temp,
                         locationClouds: location.clouds.all,
                         locationWind: location.wind.speed,
                         locationDescription: location.weather[0].description,
                         locationID: location.id,
                         locationIcon: location.weather[0].icon,
                         region: 'Eemland / Vallei',
                         totalPointsClouds: getPointsClouds(location.clouds.all),
                         totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                         totalPointsWind: getPointsWind(location.wind.speed),
                         totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),

                     }
                 }

                 return {
                     locationName: location.name,
                     locationTemp: location.main.temp,
                     locationClouds: location.clouds.all,
                     locationWind: location.wind.speed,
                     locationDescription: location.weather[0].description,
                     locationID: location.id,
                     locationIcon: location.weather[0].icon,
                     region: 'Eemland / Vallei',
                     totalPointsClouds: getPointsClouds(location.clouds.all),
                     totalPointsTemp: getPointsTemp(kelvinToCelsius(location.main.temp)),
                     totalPointsWind: getPointsWind(location.wind.speed),
                     totalPoints: getPointsClouds(location.clouds.all) + getPointsWind(location.wind.speed) + getPointsTemp(kelvinToCelsius(location.main.temp)),
                 }
             })
             setLocationsEemlandVallei(locationsEemlandValleiWithPoints)


         } catch (e) {

             console.error(e);
             throw Error("Er is iets mis gegaan, probeer het a.u.b. opnieuw!");

         }
     }


     useEffect(() => {
         fetchLocations();
     }, [])


     const data = {
         locationsUtrechtWestStad: locationsUtrechtWestStad,
         locationsLekstroom: locationsLekstroom,
         locationsUtrechtZuidOost: locationsUtrechtZuidOost,
         locationsEemlandVallei: locationsEemlandVallei,
         boosterCloud: boosterCloud,
         goBackHandler: goBackHandler,
         boosterTemp: boosterTemp,
         boosterWind: boosterWind,
     }

     return (
         <LocationContext.Provider value={data}>
             {children}
         </LocationContext.Provider>
     )


 }


export default LocationContextProvider
