import React, { Component } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Cell} from 'react-mdl'; 
import peerMentor from './Files/mentor.png';
import pc from './Files/PC.png';

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
                      <h3>Experiences</h3>
                      <hr/>
                      <h5>St.Josephs Hospital</h5>
                      <p>
                      I spent close to 200 hours in my experience at St.Josephs Hospital. While I was an active volunteer At St.Jospehs Hospital I spent time working along-side patients, assisting them in their everyday routine in the hemodialysis clinic.
                       I would communicate with nurses to exchange patient wait times and seating arrangements. Once I was informed the clinic was ready for a patient I would assist them in their transportation to the clinic and help them get seated and comfortable in their chair
                       . I managed the transportation of patients to and from the clinic via a transportation service known as 'DART'. This was a great experience and made me aware of the true impact of genuine communication.
                      </p>
                      <br/>
                      <h5>Ontario PC Party Canvas Team</h5>
                      <p>
                      During my time spent canvassing for Akash Gill (Ontario PC party MP candidate), I lead a group of fellow canvassers in a specific region of Stoney creek to spread the word about Akash's campaign. During this time I delegated tasks to my team members,
                       assigning houses and providing scripts on what to say and ask the residences. I was also collecting statistical data on geographical voting densities in specific areas, or in other words, how many people were likely to vote in certain areas of Stoney Creek.
                        This experience definitely increased my capacities as a leader and someone who can carry out and delegate tasks. The organization was also a large contributing factor for being able to organize the data while still maintaining other main tasks for the group.
                      </p>
                      <h5>North Eastern Trucking</h5>
                      <p>
                      I had started my journey at North-Eastern Trucking almost 2 years ago during the summer of 2018. North Eastern Trucking Is a local trucking company that calls Stoney Creek
                       it's home. During my capacity at this workplace, I worked along-side the head auto-mechanic in the truck yard. We spent most of our times making sure all the trucks and
                        trailers are up to par with safety standards before they leave for their trips across the country. Some of the assignments we did included changing and fixing flat
                         or broken tires, fixing the walls of trailers from cuts and broken scraps. Oil and filter changes were a regular daily job. Some of our larger projects included fixing
                          a totaled trailer by replacing all of the wall panels and support steel. Throughout my experiences at this company, I gained many transferable skills such as team-work
                           and communication. I also learned organization plays an exceptionally large role in having an efficient workflow in a team setting. If we were not able to keep tools
                            and parts organized, it would take longer to finish our jobs and in a time-sensitive role such as ours, there is no time to sacrifice. Problem-solving is a large
                             contributing factor too, sometimes parts and tools don't work the way you expected them to and quick decisions need to be made to achieve the same results without
                              sacrificing time and money.
                    
                      </p>
                      <h5>First Robotics Canada Team Mentor</h5>
                      <p>
                      Currently starting my role as an FRC mentor for the Glendale FRC team.
                       Glendale was the high school I attended in Hamilton and I was pleased to hear that I can go back and help the students in their 2020 FRC challenge Throughout help with programming and mechanical attributes of the robot.
                        Keep updated on this website to hear more about the experience and see some updated pictures.
                      </p>
                      <h5>Biology Class Assistant</h5>
                      <p>
                      In grade 12 peer-mentored grade 10 biology class. Helping students with their classwork, assignments, and labs.
                       Setting up the labs with the assistance of the teacher and grading class assignments and tests.
                        I also put together and taught my own lesson on the cardiovascular system.
                         This experience taught me the importance of planning and how delicate of a task it is planning lessons or in any case presentations.
                          The flow of a presentation is a large deciding factor on the engagement of the audience and a poorly planned lesson can lead to disengagement and loss of interest.
                      </p>
                      </Cell>
                      <Cell col={6} shadow={3}>
                      <h3>Visuals</h3>
                      <hr/>
                      
                      <div className="visuals">
                      <img
                        src={pc}
                        alt="Ontario PC party"
                        style={{width:'500px', height:'500px'}}
                        />
                      </div>

                      <div className="visuals">
                      <img
                        src={peerMentor}
                        alt="Teaching lesson"
                        style={{width:'500px', height:'500px'}}
                        />
                      </div>

                      </Cell>
                  </Grid>
            </div>
        );
        }
}

export default AboutMe;