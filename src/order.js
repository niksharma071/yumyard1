import { useNavigate } from 'react-router-dom';
import './order.css';
import back from '../src/assests/hero-bg.jpg'

const Order = () => {
    const navigate = useNavigate();
    return (
        <div style={{backgroundImage:`url(${back})`, height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="order-main">
            <div className="order-message">Thank You For Placing Order.....</div>
            <br/>
            <div className="order-time">Your Order will be on table in 5min....</div>
            <button onClick={() => navigate('/quickbite')} className='order-button'>Cancel</button>
        </div>
        </div>
    );
}

export default Order;
