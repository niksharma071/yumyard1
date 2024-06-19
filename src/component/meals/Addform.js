import { useRef} from 'react';
import './Addform.css';

const AddForm = (props) => {
    const ref=useRef();
   
   
  const handleSubmit = (e) => {
    console.log("ref value ",ref.current.value)
   
    e.preventDefault();
    const enteramount=ref.current.value;
    const number= +enteramount;
    console.log("number",number)
    
    props.onadd(number);
   
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label style={{fontWeight:"bold"}}>Amount  </label>
      <input
        className='input'
        ref={ref}
        
        type="number"
        min="1"
        max="6"
        defaultValue="0"
        
      />
      <button className='form-button1'>+ Add</button>
    </form>
  );
};

export default AddForm;
