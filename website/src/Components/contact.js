import React, { Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import profilePic from './Files/face_co.png';
var fs = require('fs');

class Contact extends Component{

    constructor(props){
        super(props)
        this.state= {
            fullName: '',
            company: '',
            message: '',
            email: ''
        }
    }

        handleSubmmmit = (event) =>{
        event.preventDefault()

        const{fullName, company, email, message} = this.state

        let contacts={
            name: fullName,
            company: company,
            email: email,
            message: message
        }

        
        localStorage.setItem('contact',JSON.stringify(contacts))

        alert('Thank you ' +  fullName + ' for your submission, I will be in contact soon!')
    }

    handleInputChange = (event) =>{

        event.preventDefault()

        this.setState({
            [event.target.name]: event.target.value,
            [event.target.company]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.message]: event.target.value
        })
    }

    render(){
        const {fullName, company, message, email} = this.state

        return(
           <div className ="contact-body">
               <Grid className ="contact-grid">
                   <Cell col={6}>
                        <h2>Gurman Brar</h2>
                        <img 
                        src={profilePic}
                        alt="Profile pic"
                        style={{height:'250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Welcome to my page, glad you took the time out of your day to pay a visit. Let me talk a little about myself while your here.
                            Im 18 years old and was born in Hamilton, Ontario. I come from an Indian background and have been a tech enthusiast my whole life. 
                            From building my own PC to creating small robots during my free time. I started my journey at the University of Waterloo for Biomedical Engineering 
                            during the fall of 2019. I had decided to settle with this program as it combined my profound intrest of technology and engineering with biology and the human body.
                            Feel free to have a look at some of the more recent projects I have been working on in the projects tab. If you have any questions, my contact information can be found to the left.
                        </p>
                   </Cell>
                   <Cell col={6}>
                        <h2>Start the conversation</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: '#2C5364'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (289) 922-9339
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: '#2C5364'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        g9brar@edu.uwaterloo.ca
                                    </ListItemContent>
                                </ListItem>
                            </List>
                            <form onSubmit={this.handleSubmmmit}>
                                <div className="formBox">
                                <label for="fullName">Name</label>
                                <input 
                                onChange={this.handleInputChange}
                                type="text" 
                                name="fullName" 
                                placeholder="Your full name"
                                value={fullName}
                                />
                                </div>

                                <div className="formBox">
                                <label for="company">Company</label>
                                <input 
                                 type="text" 
                                 name="company" 
                                 placeholder="Where do you work?"
                                 value={company}
                                 onChange={this.handleInputChange}
                                 />
                                </div>

                                <div className="formBox">
                                <label for="email">Email</label>
                                <input
                                type="text" 
                                name="email" 
                                placeholder="Your email"
                                value={email}
                                onChange={this.handleInputChange}
                                />
                                </div>

                                <div className="message-box">
                                <label for="message">Message</label>
                                <input 
                                type="text"
                                name="message"
                                value={message}
                                onChange={this.handleInputChange}
                                />
                                </div>

                                <div className="submit-button">
                                <button type="submit">Click to submit!</button>
                                </div>
                            </form>
                        </div>
                   </Cell>
               </Grid>
           </div>
        )
    }
}

export default Contact;