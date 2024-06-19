import ReactDom from 'react-dom';
import '../UI/modal.css'


const backdrop=(props)=>{
    return <div className='backdrop' ></div>
}
const Modaloverlay=props=>{
return(
    <div>
        <div className='modal'>{props.children}</div>
    </div>

)
}
const portal=document.getElementById('overlay')

const Modal=(props)=>{
return(
    <>
    {ReactDom.createPortal(backdrop(props),portal)};
    {ReactDom.createPortal(Modaloverlay(props),portal)}
    </>
)
}
export default Modal;