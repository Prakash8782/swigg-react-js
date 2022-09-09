import './footer.css';


function Footer(){
    return(
        <footer>
            <div className='foot'>
                <div className='foot-wrap'>
                    <div className='company'>
                        <h4><a>COMPANY</a></h4>
                        <a className='spon'>About us</a>
                        <a className='spon'>Team</a>
                        <a className='spon'>Careers</a>
                        <a className='spon'>Swiggy Blog</a>
                        <a className='spon'>Bug Bounty</a>
                        <a className='spon'>Swiggy One</a>
                        <a className='spon'>Swiggy Corporate</a>
                        <a className='spon'>Swiggy Instamart</a>
                    </div>
                    <div className='contact'>
                        <h4><a>CONTACT</a></h4>
                        <a className='spon'>Help</a>
                        <a className='spon'>Support</a>
                        <a className='spon'>Partner with us</a>
                        <a className='spon'>Ride with us</a>
                    </div>
                    <div className='legal'>
                        <h4><a>LEGAL</a></h4>
                        <a className='spon'>Terms & Condition</a>
                        <a className='spon'>Refund & Cancellation</a>
                        <a className='spon'>Privacy Policy</a>
                        <a className='spon'> Cookie Policy</a>
                        <a className='spon'>Offer Terms</a>
                        <a className='spon'>Offer Code</a>
                        <a className='spon'>Discount Vouchers</a>
                    </div>
                    <div className='icon'>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;