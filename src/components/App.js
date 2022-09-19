import React from 'react';
import Nav from './navbar/navbar';
import Section from './navbar/Section';
import Book from './Booking/Book';
import './App.css';
import Edit from './Edit/Edit';



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            clicked: false,
            saved: false,
            date: '',
            mobile: '',
            seats: []
        }
    }
    
    Clicked = (s) => {
        if(s == 'click'){
            this.setState({
            clicked: true,
        });
    }
    else{
        this.setState ({
            saved: !this.state.saved,
        });
    }
    }

    setdate(dt){
        this.setState({
            date: dt
        });
    }

    setMobile(mb){
        this.setState({
            mobile: mb
        });
    }

    setSeat(seat){
        this.setState({
            seats: seat
        })
    }

    render(){
        return (
            <div>
                <Nav 
                Clicked = {this.Clicked.bind(this)} />
                
                <section className= {this.state.clicked === true ? 'hide' : 'section-1'}>
                <Section />
                </section>
                <form>
                <section className= {this.state.clicked === true && this.state.saved === false ? 'section-2' : 'hide'}>
                     <Book save={this.Clicked.bind(this)} date={this.setdate.bind(this)}
                     mobile = {this.setMobile.bind(this)} seats ={this.setSeat.bind(this)}/> 
                </section>
                <section className= {this.state.saved === true ? 'section-3' : 'hide'} >
                    <div className='editContainer'>
                    <Edit date = {this.state.date} mobile ={this.state.mobile} seats={this.state.seats}/>
                    <button className='Edit-btn Edit' onClick={(e) => {e.preventDefault(); this.Clicked('save')}}>EDIT</button>
                    <input className='Edit-btn Submit' type='submit' />
                    </div>
                </section>
                
                </form>
            </div>
           
        );
    }
};

export default App;

