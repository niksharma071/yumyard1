import React from "react";
import './header2.css';
import logo from '../../assests/tandoor.png';
import Headercart from "./headercart";

const Header = (props) => {
    console.log("header", props);
   
    return (
        <>
            <header className="he">
                <img src={logo} alt="tandoor" className="image2" />
                <Headercart onpass={props.onshow}/>
            </header>
            <div className="header-container">
                {/* Content within the background image container */}
            </div>
        </>
    );
}

export default Header;
