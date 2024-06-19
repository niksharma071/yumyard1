import React from "react";
import Header from "./mainHeader";
import image from '../assests/a-lot-of-delicious-food-on-the-table-buffet-feast-2BN759C.jpg';
import image1 from '../assests/french.jpg';
import image2 from '../assests/chinese.jpg';
import image3 from '../assests/indian.jpg';
import image4 from '../assests/mexian.jpg';
import image5 from '../assests/greek.jpg';
import image6 from '../assests/middle.jpg';
import image7 from '../assests/spanish.jpg';

import { useNavigate } from "react-router-dom";
import './home.css'

function Home() {
    const navigate = useNavigate();

    const func = () => {
        navigate('/quickbite');
    };

    return (
        <>
        <div className="m">
        <Header/>
        
        <div className="container">
            <img src={image} alt="Delicious food" className="image" />
            <h1 className="title">Quick Bite</h1>
            <p>Famous For italian cuisine</p>
            <button className="button" onClick={func}>Go to QuickBite</button>
           
        </div>
        <div className="container1">
            <img src={image1} alt="Delicious food" className="image" />
            <h1 className="title">Le Petit Bistro</h1>
            <p>Famous For French cuisine</p>
            <button className="button" onClick={func}>Go to Le Petit Bistro</button>
        </div>
        <div className="container2">
            <img src={image2} alt="Delicious food" className="image" />
            <h1 className="title">Peking Garden</h1>
            <p>Famous For Chinese cuisine</p>
            <button className="button" onClick={func}>Go to Peking Garden</button>
        </div>
        <div className="container3">
            <img src={image3} alt="Delicious food" className="image" />
            <h1 className="title">Tandoori Palace</h1>
            <p>Famous For Indian cuisine</p>
            <button className="button" onClick={()=>navigate("/tandooriplace")}>Go to Tandoori Palace</button>
        </div>
        <div className="container4">
            <img src={image4} alt="Delicious food" className="image" />
            <h1 className="title">Casa Mexicana</h1>
            <p>Famous For Mexian cuisine</p>
            <button className="button" onClick={func}>Go to Mexicana</button>
        </div>
        <div className="container5">
            <img src={image5} alt="Delicious food" className="image" />
            <h1 className="title">Olympus Grill</h1>
            <p>Famous For Greek cuisine</p>
            <button className="button" onClick={func}>Go to Olympus Grill</button>
        </div>
        <div className="container6">
            <img src={image6} alt="Delicious food" className="image" />
            <h1 className="title">Cedar Palace</h1>
            <p>Famous For Middle East Cruisne  </p>
            <button className="button" onClick={func}>Go to Cedar Palace</button>
        </div>
        <div className="container7">
            <img src={image7} alt="Delicious food" className="image" />
            <h1 className="title">Golden Dragon</h1>
            <p>Famous For Spanish Cruisne  </p>
            <button className="button" onClick={func}>Go to Golden Dragon</button>
        </div>
        </div>
        </>
    );
}

export default Home;
