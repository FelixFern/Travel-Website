import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar-parent'>
            <div className="company">
                <div className="logo">
                    <img src="assets/logo.png" alt="" />
                </div>
                <h3>
                    Bintan<br/>
                    <span>
                        Tour Travel & Taxi
                    </span>
                </h3>
            </div>
            <div className="navigation">
                <a href="#activities" className='link'><h3>Activities</h3></a>
                <a href="#book" className='orange-btn'><h3>Book Now</h3></a>
            </div>
        
        </div>
    )
}

export default Navbar