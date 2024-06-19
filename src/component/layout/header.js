import React from "react";
import image from '../../assests/a-lot-of-delicious-food-on-the-table-buffet-feast-2BN759C.jpg';
import '../layout/style.css';
import Headercart from "./headercart";
import logo from '../../assests/logo2.png'

const Header = (props) => {
    console.log("header",props);
   
   
    return (

        <>
        
            <header className="hea">
                <img src={logo} alt="Quickbite " className="image2"></img>
                <h1 style={{color:"#ccc"}}>Famous Italian Cuisine Restaurant </h1>
                <Headercart onpass={props.onshow}/>
                
            </header>
            <div className="main-image">
                <img src={image} alt="a table of delicious meals" />
            </div>
        </>
    );
}

export default Header;
