import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './section.css';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';

const Section = () => {
    return (
        <div className='loader'>
            <div className='aeroplane'>
                <FontAwesomeIcon icon={faPlaneUp} className='aeroplane-icon'/>
            </div>
            <span><i></i></span>
        </div>
    );
};

export default Section;