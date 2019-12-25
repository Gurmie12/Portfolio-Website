import React, { Component } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Cell} from 'react-mdl';

class AboutMe extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
      }
    
      handleOpenDialog() {
        this.setState({
          openDialog: true
        });
      }
    
      handleCloseDialog() {
        this.setState({
          openDialog: false
        });
      }
    
      render() {
        return (
            <div className="aboutme">
                <div className="alert-system">
                <Button colored onClick={this.handleOpenDialog} raised ripple>Click here to be updated!</Button>
                <Dialog open={this.state.openDialog}>
                <DialogTitle style={{textAlign: 'center'}}>Smart Helmet</DialogTitle>
                <DialogContent>
                    <p style={{textAlign: 'center'}}>Currently working on developing a smart helmet device that will use a raspberry pi to perform smart functionality in the everyday lives
                        of its target users. Using various sensors and Python as the programming language.</p>
                </DialogContent>
                <DialogActions>
                    <Button type='button' onClick={this.handleCloseDialog}
                    style={{color: 'black', background: 'grey', opacity: '0.8', fontWeight: 'bold'}}>
                    Done reading!</Button>
                </DialogActions>
                </Dialog>
                </div>
            <Grid className="aboutme-grid">
                <Cell col={6} shadow={3}>
                <h2>Experiances</h2>
                <hr/>
                <p>hello</p>
                <br/>
                <p></p>
                </Cell>
                <Cell col={6} shadow={3}>
                <h2>Visuals</h2>
                <hr/>
                </Cell>
            </Grid>
            </div>
        );
        }
}

export default AboutMe;