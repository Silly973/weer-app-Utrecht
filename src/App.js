import React from "react";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import {AuthContextProvider} from "./Context/AuthContext";
import Header from "./components/header/Header";
import Account from "./pages/account/Account";
import Signup from "./pages/signup/Signup";
import Region from "./pages/region/Region";
import Location from "./pages/location/Location"
import Utrecht from "./pages/Utrecht/Utrecht";
import UtrechtWestStad from "./pages/UtrechtWestStad/UtrechtWestStad";
import UtrechtZuidOost from "./pages/UtrechtZuidOost/UtrechtZuidOost";
import EemlandVallei from "./pages/EemlandVallei/EemlandVallei";
import Lekstroom from "./pages/Lekstroom/Lekstroom";
import Map from"./components/map/Map";
import './App.css';
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";









function App() {


    return (
      <>
          <div className="page-container">
              <div className="content-wrap">

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

              </div>
          </div>




      </>
  )
}

export default App