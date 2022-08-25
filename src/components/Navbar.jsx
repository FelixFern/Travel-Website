import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar-parent'>
            <div className="company">
                <div className="logo"></div>
                <h3>
                    TRAVEL AND TAXI <br/>
                    <span>
                        NAGA BINTAN
                    </span>
                </h3>
            </div>
            <div className="navigation">
                <a href="#"><h3>Activities</h3></a>
                <a href="#" className='orange-btn'><h3>Book Now</h3></a>
            </div>
        
        </div>
    )
}

export default Navbar