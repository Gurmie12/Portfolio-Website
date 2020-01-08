import React, { Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import profilePic from './Files/face_co.png';
import cleaner from './Files/cleaner.png';

class Contact extends Component{
    render(){

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
                            
                        Welcome to my page, glad you took the time out of your day to pay a visit. Let me talk a little about myself while you're here.
                         I'm 18 years old and was born in Hamilton, Ontario. I come from an Indian background and have been a tech enthusiast my whole life.
                          From building my own PC to creating small robots during my free time. I started my journey at the University of Waterloo for Biomedical
                           Engineering during the fall of 2019. I had decided to settle with this program as it combined my profound interest in technology and engineering 
                           with biology and the human body. Feel free to have a look at some of the more recent projects I have been working on in the projects tab.
                            If you have any questions, my contact information can be found to the left.
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

                            <div className="google-from">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiEtX91J0LHBhvcCBGsFmzBA6YnkdxrwP-4R1z91zF7ZUBqg/viewform?embedded=true" width="600" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                            </div>

                        </div>
                   </Cell>
               </Grid>
           </div>
        )
    }
}

export default Contact;