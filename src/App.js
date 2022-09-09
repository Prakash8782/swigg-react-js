import './App.css';
import{ useState} from 'react';
import Body from './components/body';
import Header from './components/header';
import Login from './components/login';
import Footer from './components/footer';
import * as React from 'react';
import {Routes,Route,Link} from 'react-router-dom';

function App() {
  const [isLoggedin,setLoggedIn]=useState(false);

  const loginhandler=(islogin)=>{
    localStorage.setItem('login', islogin)
    setLoggedIn(islogin);
  }

  return (
    <div className="App">
      <Routes>
       <Route index element={<Login isLoggedin={loginhandler}></Login>} />
        <Route path="/header" element={<Header/>}> 
        <Route path="body" element={<Body/>}/>
        </Route>
        <Route path="/footer" element={<Footer/>} />
      </Routes>
      
      {/* { isLoggedin ?<Body logout={loginhandler}></Body>:<Login isLoggedin={loginhandler}></Login>} */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
