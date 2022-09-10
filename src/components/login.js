import './login.css';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Login(props){
    let navigateto=useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[username,setUsername]=useState("");
    const[isvalid,setValid]=useState(false);

    const login=(a)=>{
        a.preventDefault();
        localStorage.setItem("login",true);
        props.isLoggedin(true);
        navigateto('/header/body');
    }

    useEffect(() => {
        fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/login').then((response)=>{
            if(response.ok){
                return response.json();
            } 
            return false;
        }).then((response)=>{
            if(response){
                props.isLoggedin(false);
                navigateto('/header/body');
            }
        })
    },[props,navigateto]);

    useEffect(()=>{
        if((email.includes('@') && password.length > 5)){
            setValid(true);
        }

},[email,password,username]);

    useEffect(()=>{
        return ()=> console.log('login is unmounted');   
},[]);

const emailHandler=(a)=>{
    setEmail(a.target.value)
}
const passwordHandler=(a)=>{
    setPassword(a.target.value)
}
const userHandler=(a)=>{
    setUsername(a.target.value)
}

return(
    <form  className='log' onSubmit={login}>
        <h2>Sign-in</h2>
        <input className='input' type="username" placeholder="Enter Username"onChange={userHandler} value={username} required/>
        <input className='input' type="email" placeholder="Enter Email" onChange={emailHandler} value={email} required/>
        <input className='input' type="password" placeholder="Enter Password" onChange={passwordHandler} value={password} required/>
        {isvalid? <button type="submit">Login</button> : <button type="submit" disabled>Login</button>}
    
    </form>
);
}


export default Login;