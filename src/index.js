import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
//import AuthContextProvider from "./Context/AuthContext";
import LocationContextProvider from "./Context/LocationContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>

        <LocationContextProvider>
    <App/> ;
        </LocationContextProvider>

</Router>
);
