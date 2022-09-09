import './header.css';
import {Outlet} from 'react-router-dom';

function Header(){
    return(
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <a><h2>Swiggy</h2></a>
                    </div>
                    <div className="nav-bar">
                        <a className='nav'>Search</a>
                        <a className='nav'>Offer%</a>
                        <a className='nav'>Cart</a>
                        <a className='nav'>Delivery</a>
                        <a className='nav'>Help</a>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </header>
    )
}

export default Header;