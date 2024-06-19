import create from "../store1/cart-context"
import React, { useReducer } from "react";


const intial={
    item:[],
    totalamount:0
}

const cartReducer=(state,action)=>{
    if(action.type==="Add"){
        const updateamount= state.totalamount+action.item.price*action.item.amount
    
      const Idx= state.item.findIndex((item)=>item.id===action.item.id);
      const existingitm=state.item[Idx];
      let updateditm;
      if(existingitm){
      const updateditms={...existingitm,amount:existingitm.amount+action.item.amount}; 
      updateditm=[...state.item];
      updateditm[Idx]=updateditms
      
      }
      else {
        updateditm = state.item.concat(action.item);
    }
      return{
        item:updateditm,
        totalamount:updateamount
      }
    }
    if(action.type="Rem"){
       const Idx= state.item.findIndex((item)=>item.id===action.id);
       const existingitm=state.item[Idx];
       const updateamt=state.totalamount-existingitm.price;
       let updateditm;
       if(existingitm.amount==1){
        updateditm=state.item.filter(item=>item.id!==action.id)
       }
       else{
        const updateditms={...existingitm,amount:existingitm.amount-1}; 
        updateditm=[...state.item];
        updateditm[Idx]=updateditms

       }
       return{
        item:updateditm,
        totalamount:updateamt
      }

       
    }
return intial
}
const Provider=(props)=>{
    
const [count,dispatchAction]=useReducer(cartReducer,intial);
    console.log("child23",props.children)
    const additemevent=(item)=>{
    dispatchAction({type:"Add",item:item})
    }
    const removeitemevent=(id)=>{
        dispatchAction({type:"Rem",id:id})
    }
    const val={
    item:count.item,
    totalamount:count.totalamount,
    additem:additemevent,
    removeitem:removeitemevent
    }
    return(
<create.Provider value={val}>
{props.children}
</create.Provider>
    )
}
export default Provider;

