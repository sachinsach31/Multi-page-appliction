import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Revanth from "./Revanth";
import Sagar from "./Sagar";
import Akash from "./Akash";
import Home from "./Home";
import "./App.css"


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
    <Routes>
    <Route exact path ='/'  element ={<Home/>}/>
    <Route exact path ='/Akash'  element ={<Akash/>}/>
    <Route exact path ='/Revanth'  element ={<Revanth/>}/>
    <Route exact path ='/Sagar'  element ={<Sagar/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
