import React, { Component } from 'react';
import {Tabs,Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }


    toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="project-card">
            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://lh3.googleusercontent.com/UEZiga9OucUeU0UVoVAfJSxxQKyVkjX7c8DRpor3fXNOD0fTiBiMglpHC6hHRW7Jqu0) center / cover'}}>
                    VR Game for NASA Space Apps
                </CardTitle>
                <CardText>
                    About the app.
                </CardText>
                <CardActions border>
                    <Button style={{color:"black"}}>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton style={{color:"black"}} name="Share"/>
                </CardMenu>
            </Card>

            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://lh3.googleusercontent.com/UEZiga9OucUeU0UVoVAfJSxxQKyVkjX7c8DRpor3fXNOD0fTiBiMglpHC6hHRW7Jqu0) center / cover'}}>
                SUMO bots 
            </CardTitle>
            <CardText>
                Programmed an arduino using C++ inorder to carry out tasks such as avoid opposing robots, avoid specific colored lines,
                change direction based on external sensor data to effectivley track and hit other robots.
            </CardText>
            <CardActions border>
                <Button style={{color:"black"}}>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton style={{color:"black"}} name="Share"/>
            </CardMenu>
            </Card>
            </div>
        )
        }
    else if(this.state.activeTab === 1){
        return(
            <div className="project-card">
            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url() center / cover'}}>
                Just programming Stuff
            </CardTitle>
            <CardText>
                About the app.
            </CardText>
            <CardActions border>
                <Button style={{color:"black"}}>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton style={{color:"black"}} name="Share"/>
            </CardMenu>
            </Card>
        
            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: 'black', height: '176px', background: 'url(https://lh3.googleusercontent.com/UEZiga9OucUeU0UVoVAfJSxxQKyVkjX7c8DRpor3fXNOD0fTiBiMglpHC6hHRW7Jqu0) center / cover'}}>
                     SUMO bots 
                 </CardTitle>
                 <CardText>
                     Programmed an arduino using C++ inorder to carry out tasks such as avoid opposing robots, avoid specific colored lines,
                     change direction based on external sensor data to effectivley track and hit other robots.
                 </CardText>
                 <CardActions border>
                     <Button style={{color:"black"}}>GitHub</Button>
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton style={{color:"black"}} name="Share"/>
                 </CardMenu>
            </Card>
            </div>
        )
    }
    else if(this.state.activeTab === 2){
        return(
            <div className="project-card">
            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url() center / cover'}}>
                    Just mechanical Stuff
                </CardTitle>
                <CardText>
                    About the app.
                </CardText>
                <CardActions border>
                    <Button style={{color:"black"}}>Live Preview</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton style={{color:"black"}}name="Share"/>
                </CardMenu>
            </Card>
            </div>
        )
    }    
    }
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple>
                    <Tab>
                        All projects
                    </Tab>
                    <Tab>
                        Software
                    </Tab>
                    <Tab>
                        Hardware
                    </Tab>

                </Tabs>

                    <Grid >
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;