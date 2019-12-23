import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
           <div className ="contact-body">
               <Grid className ="contact-grid">
                   <Cell col={6}>
                        <h2>Gurman Brar</h2>
                        <img 
                        src="https://avachara.com/avatar/photo3.php?873747768"
                        alt="Profile pic"
                        style={{height:'250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Talk about my school and program
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
                        </div>
                   </Cell>
               </Grid>
           </div>
        )
    }
}

export default Contact;