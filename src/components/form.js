import React, { useState } from "react";
import './form.css';

function Form(props) {

    const [form, setForm] = useState({
        id:'',
        restaurant: '',
        variety: '',
        offer: '',
        price: '',
        ratings: '',
    });

    const resHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, restaurant: event.target.value }
        });
    }
    const varHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, variety: event.target.value }
        });
    }
    const offHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, offer: event.target.value }
        });
    }
    const priHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, price: event.target.value }
        });
    }
    const ratHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, ratings: event.target.value }
        });
    }

    const subjectHandler = (a) => {
        a.preventDefault();
        const addedform = { ...form, id: Math.random().toString() }
        props.onFormAdded(addedform);
        setForm({
            id:'',
            restaurant: '',
            variety: '',
            offer: '',
            price: '',
            ratings: '',
        })
    }

    return (
        <div className="form">
            <h3>Orders</h3>
            <form onSubmit={subjectHandler}>
                <input type="text" placeholder="Restaurant Name"  onChange={resHandler}></input>
                <input type="text" placeholder="Variety"  onChange={varHandler}></input>
                <input type="number" placeholder="Offers"  onChange={offHandler}></input>
                <input type="number" placeholder="Price"  onChange={priHandler}></input>
                <input type="number" placeholder="Ratings"  onChange={ratHandler}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Form;