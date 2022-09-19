import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import './section.css';

class navbar extends React.Component{

    render(){
        return(
            <nav className='navbar navbar-expand-md'>
                <div className='navbar-brand'>
                    <FontAwesomeIcon icon={faPlaneDeparture} className="nav-icon" /> Book My Flight
                </div>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#toggleMobileMenu'
                aria-controls='toggleMobileMenu' aria-expanded='false' aria-label='Toggle navigation'>
                    <span>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </button>
                <div className='collapse navbar-collapse d-flex-md justify-content-end align-items-baseline' id='toggleMobileMenu'>
                    <ul className='navlist'>
                        <li onClick={() => this.props.Clicked('click')}>Book</li>
                    </ul>

                    <div className='user'>
                    <FontAwesomeIcon icon={faCircleUser} className='user-login'/> Login
                </div> 
                </div>
                   
            </nav>
        );

        
    };
};

export default navbar;