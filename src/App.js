


import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ScrollToTop from './components/ScrollTop';
import {observer} from "mobx-react-lite";
import NavBar from './components/NavBar';
import ToggBar from './components/ToggBar';
const App = observer(() => {


    return (
        <BrowserRouter>
        <NavBar/>
            <ScrollToTop/>
      
            <AppRouter />
 <ToggBar/>
        
        </BrowserRouter>
        
    );
    
});

export default App;