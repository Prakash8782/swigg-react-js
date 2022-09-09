import './body.css';
import { useEffect, useState } from 'react';
import FoodList from './foodlist';
import Form from './form';
import img1 from './images/pizza.jpg';
import img2 from './images/chicken65.jpg';
import img3 from './images/burger.jpg';
import img4 from './images/fishfry.jpg';
import img5 from './images/parotta.jpg';
import img6 from './images/noodles.jpg';

function Body(props){
    // const [foods,setfoods]=useState([...foodlist]);
    // function updateFoods(newFoods){
    //   setfoods([...foods,newFoods])
    // }


    // class Expenses extends React.Component {
    //     constructor(props) {
    //       super(props);
    //       this.state = {
    //         food: []
    //       };
    //       this.intervalId = "";
    //       console.log(this);
    //       this.clickHandler = this.clickHandler.bind(this);
      
    //     }
      
    //     clickHandler() {
    //       console.log(this)
    //       this.setState({
    //         food: [...[{
    //           id:'',
            // restaurant: '',
            // variety: '',
            // offer: '',
            // price: '',
            // ratings: '',
    //         }], ...this.state.body]
    //       });

    //     }
      
    //     componentDidMount() {
      
    //       this.intervalId = setInterval(() => {
    //         fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/hotels').then((response) => {
         
    //           if (response.ok) {
    //             return response.json()
    //           }
    //           return false;
    //         }).then((response) => {
    //           if (response) {
    //             this.setState({food:response});
    //           }
    //         })
    //       }, 1000);
      
      
      
    //     }
    //     componentWillUnmount() {
    //         console.log('unmounted food')
    //         clearInterval(this.intervalId);
    //     }
      
    //     render() {
    //       return (<div>
           
    //         {/* <Food onAddedFood={this.addbodyHandler} /> */}
    //         <FoodList food={this.state.food} />
      
    //         <button onClick={this.clickHandler}>Add Food</button>
    //       </div>);
    //     }
    //   }



    const foodList=[];
    const[foods,setFoods]=useState(foodList);
    const image=[img1,img2,img3,img4,img5,img6];

    const addBodyHandler=(foods)=>{
        fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/hotels',{
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8'
                },
            body: JSON.stringify(foods)
        }).then(res => res.json());
        
        setFoods((prevfoods)=>{
            return[...[foods],...prevfoods]
        }).then((data)=>{
            data.forEach((dat,i) => {
                dat.images=image[i%image.length]
            });
        })
        }

        useEffect(()=>{
            document.title="Swiggy"
            const intervalId=setInterval(()=>{
                fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/hotels').then((response)=>{
                    if(response.ok){
                        return response.json()
                    }
                    return false;
                }).then((response)=>{
                    if(response){
                        setFoods(response);
                    }
                })
        },1000);
        return()=>{
            clearInterval(intervalId);
            }
        },[]);

        const logout =()=>{
            props.logout(false)
        }
        
    return(
        <body className='container'>
            <button onClick={logout}>Logout</button>
            <p>The most important part of great taste comes from selecting good ingredients that are carefully prepared by a skilled chef, so that each dish has a great, impressive flavour. It's as if when you close your eyes, you can still feel the sweet, sour, oil, salt, and spice tingling throughout your mouth.</p>
            <Form onFormAdded={addBodyHandler}></Form>
            <div className='wrap'>
            <FoodList foods={foods}></FoodList>
            </div>
        </body>
        
    )
}

export default Body;