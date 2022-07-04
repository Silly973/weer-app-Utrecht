import React, {useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {Route, Routes, Redirect, Navigate} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {AuthContextProvider} from "./Context/AuthContext";
import privateRoute from "./components/protectedroute/ProtectedRoute";
import Header from "./components/header/Header";
import Account from "./pages/Account";
import Signup from "./pages/signup/Signup";
import Footer from "./components/footer/Footer";
import axios from "axios";
//import isAuth, { AuthContext } from './Context/AuthContext';
//import {auth} from "./firebase";
//import Booster from "./components/Booster";
//import Counter from "./components/Counter";
import Region from "./pages/region/Region";
import Location from "./pages/location/Location"
import Utrecht from "./pages/Utrecht/Utrecht";
//import UtrechtStad from "./pages/UtrechtWestStad/UtrechtWestStad";
import UtrechtWestStad from "./pages/UtrechtWestStad/UtrechtWestStad";
import UtrechtZuidOost from "./pages/UtrechtZuidOost/UtrechtZuidOost";
import EemlandVallei from "./pages/EemlandVallei/EemlandVallei";
//import Vallei from "./pages/Vallei/Vallei";
import Lekstroom from "./pages/Lekstroom/Lekstroom";
//import Text from "./pages/text/Text";

import Map from"./components/map/Map";
import './App.css';
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";





//const apiKey = "774fdb09bb8dab0ad38f5659a4142c17";


function App() {
 // const {isAuth} = useContext(AuthContext);





    return (
      <>

                  <AuthContextProvider>
                      <div className="weather-container">
                      <Navbar />
                          <div className="weather-container">

                              <Header/>
                              <div className="weather-wrapper">

                              <Routes>

            <Route path="/" element={<Home />} />
              <Route path="/Utrecht" element={<Utrecht/>} />
              <Route path="/Map" element={<Map/>} />
              <Route path="/UtrechtWestStad" element={<UtrechtWestStad/>} />
              <Route path="/UtrechtZuidOost" element={<UtrechtZuidOost/>} />
              <Route path="/EemlandVallei" element={<EemlandVallei/>} />
              <Route path="/Lekstroom" element={<Lekstroom/>} />
              <Route path="/Location/:slug" element={<Location />} />
              <Route path="/region" element={<Region />} />


              <Route
                  path='/Account'
                  element={
                      <ProtectedRoute>
                          <Account />
                      </ProtectedRoute>
                  }
              />
            <Route path="/login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />



          </Routes>
                              </div>
                          </div>
                      </div>
                  </AuthContextProvider>

              {/*<Footer/>*/}


      </>
  )
}

export default App