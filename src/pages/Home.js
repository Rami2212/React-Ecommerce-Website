import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from '../assets/header-background-image.jpg';
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}> 
      <div className="headerContainer">
        <h1>RIST PIZZA</h1>
        <p>Best pizza in the country!</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
        
      </div>
    </div>
  )
}
