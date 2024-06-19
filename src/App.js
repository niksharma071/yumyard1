import logo from './logo.svg';
import './App.css';
import Header from './component/layout/header';
import Headercart from './component/layout/headercart';
import Meals from './component/meals/meal';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import Cart from './component/cart/cart';
import { useState } from 'react';
import Provider from './component/store/cartProvider';
import Order from './order';
import Header1 from './tandoor/layout1/header';
import Meals1 from './tandoor/meals1/meal';
import Cart1 from './tandoor/cart1/cart';
import Cartprovider from './tandoor/store1/cart-provider';

function App() {
  const[a,seta]=useState(false);
  const showcarthandler=()=>{
    seta(true)
  }
  const hidecarthandler=()=>{
    seta(false)
  }
  return (
    
    <div className="App">
      <Routes>
      <Route path='/tandooriplace' element={
          <> 
          <Cartprovider>
            <Header1 onshow={showcarthandler}/>
            <Meals1/>
            {a && <Cart1 oncancel={hidecarthandler}/>}
            </Cartprovider>
          </>
        }></Route>
        <Route path ='/home' element={<Home/>}></Route>
        <Route path='/orderplace' element={<Order/>}></Route>
        
        <Route path='/quickbite' element={
          <> 
          <Provider>
            <Header onshow={showcarthandler} />
            <Meals />
            {a && <Cart oncancel={hidecarthandler}/>}
            </Provider>
          </>
        }>
          
        </Route>
        
      </Routes>

    </div>
  );
}

export default App;
