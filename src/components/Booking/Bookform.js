import {useState} from 'react';
import './Bookform.css';

const Bookform = ({type}) => {
    const [addTraveller, setTravellerList] = useState([{traveller: ""}]);

    const newTraveller = () => {
        setTravellerList([...addTraveller, {traveller: ""}]);
    };

    const removeTraveller = (index) => {
        const list = [...addTraveller];
        list.splice(index, 1);
        setTravellerList(list);
    };

    return(
        <div>{
            addTraveller.map((traveller, index) => (
                <div key={index}>
                    
                    
                    <div className="row g-2 rowbookform">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name And Middle Name"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <fieldset className="row mb-3 rowbookform">
                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Female
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <button className='add button'>ADD</button>
                    {addTraveller.length > 1 && 
                    (<button className='btn-remove button' onClick={(e) => {e.preventDefault(); return removeTraveller(index);}}>Remove</button>)}
                    {addTraveller.length-1 === index && (<button className='add-btn button' onClick={newTraveller}>+ ADD NEW {type}</button>)}
                    
                </div>
            ))
        }
    </div>
    );
};

export default Bookform;