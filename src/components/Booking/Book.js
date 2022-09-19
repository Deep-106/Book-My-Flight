import Bookform from "./Bookform";
import Seatselection from "./Seatselection";
import './Book.css';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import React from "react";

class Book extends React.Component {
        state = { phone: "" };  
        

     render(){
        return(
            <div>
            <div className='container d-md-flex containerbook size'>
                    <div className="row rowbook">
                    <div className='container-fluid'>
                    <div className="blockbook"><h4 className="size headingbook">ADULT (12+ yrs)</h4>
                    <Bookform 
                    type='ADULT' />
                    </div>
                    <div className="blockbook"><h4 className="size headingbook">CHILD (Below 12 yrs)</h4>
                    <Bookform type='CHILD' />    
                    </div>
                    </div>

                    <div className="container-fluid">
                        <h4 className="size headingbook">Mobile Number</h4>
                            {/* <Mobileinput />     */}
                            <div>
                               <ReactPhoneInput
                               inputExtraProps={{
                               name: "phone",
                               required: true,
                               autoFocus: true
                              }}
                              defaultCountry={"sg"}
                              value={this.state.phone}
                              onChange={(e) => this.props.mobile(e)}
                             />
        </div>
                    </div>
                    <div className="container-fluid" style={{marginTop: '10px'}}>
                    <h4 className="size headingbook">Date</h4>
                            <input type="date" className="form-control" style={{width: 'max-content'}}  onChange={(e) => this.props.date(e.target.value)}/>
                    </div>
                    </div>                  

                <div className="container row rowbook seats text-center">
                        <Seatselection seatsBooked={this.callSeat.bind(this)}  />
                        
                        <div className="save-btn text-center">
                        {/* <button className="btn">SAVE</button>   */}
                         <button onClick={(e) =>{e.preventDefault(); this.props.save('save')}} className="btn">SAVE</button> 
                        </div>
                </div>
                </div>
                </div>
                
        );
     }

     callSeat(userBooked){
        //      console.log(userBooked);
             this.props.seats(userBooked);
     }

     
};

export default Book;