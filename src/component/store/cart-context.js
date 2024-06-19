import React from "react";

const create=React.createContext({
    item:[],
    totalamount:0,
    additem:(item)=>{},
    removeitem:(id)=>{}
});
export default create;