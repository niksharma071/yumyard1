import React from "react";
import './mainhaeder.css';
import image from '../assests/logo.png'
import imag1 from '../assests/instragram.jpg'

const Header = () => {
    return (
        <header className="header">
        <img src={image} alt="logo-image" />
        <h1 className="h">Taste the World at YumYard</h1>
        
    </header>
    );
}

export default Header;
