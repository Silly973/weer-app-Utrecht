import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
//import AuthContextProvider from "./Context/AuthContext";
import LocationContextProvider from "./Context/LocationContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
    {/*<AuthContextprovider>*/}
        <LocationContextProvider>
    <App/> ;
        </LocationContextProvider>
    {/*}  </AuthContextprovider> */}
</Router>
);
