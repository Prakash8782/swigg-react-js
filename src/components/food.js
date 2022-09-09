import './food.css';
import {useState} from 'react';

function Foods(props){
    const [price,setPrice]=useState(props.price);
        const clickHandler =()=>{
            let newPrice=(props.price-(props.offer/100)*props.price);
           setPrice(newPrice);
        }
    return(
        <a>
        <div className='foods-container'>
            <div className='foods-wrapper'>
            <div className='image'>
                <img>{props.image}</img>
            </div>
            <div className='list'><h3>{props.restaurant}</h3></div>
            <div className='list'>{props.variety}</div>
            <div className='list'>{props.offer}{' %'}</div>
            <div className='list'>{'₹ '}{price}</div>
            <div className='list'>{props.ratings}</div>
            <button onClick={clickHandler}>Order</button>
            </div>
        </div>
        </a>
    );
    }
export default Foods;
