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
                </div>
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
                  <Grid className="aboutme-grid">
                      <Cell col={6} shadow={3}>
                      <h3>Experiances</h3>
                      <hr/>
                      <h5>St.Josephs Hospital</h5>
                      <p>hello</p>
                      <br/>
                      <p></p>
                      </Cell>
                      <Cell col={6} shadow={3}>
                      <h3>Visuals</h3>
                      <hr/>
                      </Cell>
                  </Grid>
            </div>
        );
        }
}

export default AboutMe;