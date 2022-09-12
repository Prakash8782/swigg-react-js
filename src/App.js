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
        setLoggedIn(islogin);
  }

  return (
    <div className="App">
      <header className='App-header'>
        {isLoggedin &&
         <nav>
          <Link to="/"></Link>
          <Link to="header"></Link>
          <Link to="header/body"></Link>
          <Link to="header/body/footer"></Link>
        </nav>
        } 
      </header>
      <Routes>
        <Route index element={<Login isLoggedin={loginhandler}></Login>}></Route>
        <Route path="/header" element={<Header/>}>
        <Route  path="body" element={ isLoggedin ?<Body logout={loginhandler}></Body>:<Login isLoggedin={loginhandler}></Login>}></Route>
        <Route path="footer" element={<Footer/>}></Route>
        </Route>
      </Routes>
      
      {/* { isLoggedin ?<Body logout={loginhandler}></Body>:<Login isLoggedin={loginhandler}></Login>} */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
