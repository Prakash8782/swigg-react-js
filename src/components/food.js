import './food.css';
import {useState} from 'react';
import img1 from './images/pizza.jpg';
import img2 from './images/chicken65.jpg';
import img3 from './images/burger.jpg';
import img4 from './images/fishfry.jpg';
import img5 from './images/parotta.jpg';
import img6 from './images/noodles.jpg';

function Foods(props){

    const image=[img1,img2,img3,img4,img5,img6];

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
                <img src={img5} width={175} height={175}></img>
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
