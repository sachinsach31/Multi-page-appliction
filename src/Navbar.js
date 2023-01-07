import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css"


const Navbar = () => {
  return (
    <div>
        <ul id='aka'>
           <Link to = "/"><li>Home</li></Link>
           <Link to = "/sagar"><li>Sagar</li></Link>
           <Link to = "/revanth"><li>Revanth</li></Link>
           <Link to = "/akash"><li>Akash</li></Link>
        </ul>
    </div>
  )
}

export default Navbar
