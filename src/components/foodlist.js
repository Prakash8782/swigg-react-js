import React from 'react';
import './foodlist.css';
import Foods from './food';

function FoodList(props){
    return(<>
    {
        (props.foods.length===0|| props.foods.length<2)&&<p>please add food</p>
    }
    {
        props.foods.length>0?(props.foods.map((foods)=>{
            return<Foods key={foods.id} 
            restaurant={foods.restaurant} 
            variety={foods.variety}
            offer={foods.offer}
            price={foods.price}
            ratings={foods.ratings}>
            </Foods>
        })):<div className='body-con'><p>No Foods Found</p></div>
    }
    </>);
}

export default FoodList;