import './body-famousDish.css'

const Card=(props)=>{
    console.log("card",props);
    return(
    
     <div className='card'>
     {props.children}
     </div>
       
    )
}
export default Card;