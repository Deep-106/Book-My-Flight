import React from 'react';
import {v4 as uuid} from 'uuid';
import './Edit.css';

const bookingID = uuid().slice(0,8);

class Edit extends React.Component{
    render(){
        return(
        <div className='edit-container'>
            <h2 className='edit-heading'>Booking Details</h2>
            <p>Booking ID: <span className='edit-span'>{bookingID}</span> </p>
            <p>Date: <span className='edit-span'>{this.props.date}</span></p>
            <p>Mobile Number: <span className='edit-span'>{this.props.mobile}</span></p>
            <div>Seats Booked: {this.props.seats.map(seat => <span key={seat}  className='edit-span' style={{marginRight: '10px'}}>{seat}</span>)}</div>
        </div>
    );
    }
}

export default Edit;