import React,{useState} from 'react'
import './App.css';
const Question = ({ title, info }) => {
    const [show, setShow] = useState(false);
return (
    <article className='question'>
     <header>
    <h3>{title}</h3>
    <button className='btn' onClick={()=>setShow(!show)}>{show? "less": "more"}</button>
    </header>
    {
    show && <p>{info}</p>
    }
    </article>   
)
}
export default Question;

