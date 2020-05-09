import React, { Component } from 'react';
import {Tabs,Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText} from 'react-mdl';
import cleaner from './Files/cleaner.png';
import ri3d from './Files/ri3d.PNG';
import vr from './Files/vr.PNG';
import sumo from './Files/sumo.png';


class Projects extends Component{

    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }


    toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">

            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#2C5364', height: '176px', background:'grey', fontWeight:'bold'}}>
                    VR Game for NASA Space Apps
                </CardTitle>
                <CardText>
                Created a 3D VR game using Unity and the google cardboard SDK. The coding language used was C#. App aimed to inform the youth of the current global warming issue.
                 Directly target the theme of the hackathon being earth and current world issues. Hardware used was google cardboard as the VR device to connect to the phone.
                  The app was not Published to the app store but was rendered via Xcode and imported to group member iPhones.
                   Users were guided via a vector force through two different cities and experience the different forms of gas production that contributed to global warming
                   . Source to Xcode project can be found on GitHub.
                    <img
                    alt="in-game photo"
                    src={vr}
                    style={{height:'250px', width:'300px', textAlign:'center', paddingTop:'2em'}}
                    />
                </CardText>
                <CardActions border style={{background:'grey', fontWeight:'bold'}}>
                    <Button href="https://github.com/Gurmie12/VR-game-for-NASA-Space-Apps" target="_blank" rel="noopener noreferrer" style={{color:"#2C5364"}}>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <h3 style={{color:'black'}}>C#</h3>
                </CardMenu>
            </Card>

            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#2C5364', height: '176px', background: 'grey', fontWeight:'bold'}}>
                SUMO bots 
            </CardTitle>
            <CardText>
            Programmed an Arduino using C++ in order to carry out tasks such as avoid opposing robots, avoid specific colored lines,
             change direction based on external sensor data to effectively track and hit other robots. Competed in the Sumobots competition at McMaster university against
              other robots. The frame was 3D-printed used SolidWorks software to design it.
                <img
                alt="robot picture"
                src={sumo}
                style={{height:'250px', width:'300px', textAlign:'center', paddingTop:'2em'}}
                />

            </CardText>
            <CardActions border style={{background:'grey', fontWeight:'bold'}}>
                <Button href="https://github.com/Gurmie12/SumoBots-Arduino" target="_blank" rel="noopener noreferrer" style={{color:"#2C5364"}}>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <h3 style={{color:'black'}}>C++</h3>
            </CardMenu>
            </Card>

            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#2C5364', height: '176px', background: 'grey', fontWeight:'bold'}}>
                3D Unity Runner Game
            </CardTitle>
            <CardText>
            Developed and designed a small 3D unity game that involves a cube that must run through a level while avoiding the objects on the map.
             Programmed in C# and incorporates elements such as score tracking, death effect, level finish effect.
              Controls are functional via the touch screen on any mobile phone. Planning on incorporating more levels very shortly and uploading it to the app store. 
            </CardText>
            <CardActions border style={{background:'grey', fontWeight:'bold'}}>
                <Button href="https://github.com/Gurmie12/3D-unity-runner-game" target="_blank" rel="noopener noreferrer" style={{color:"#2C5364"}}>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <h3 style={{color:'black'}}>C#</h3>
            </CardMenu>
            </Card>

            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#2C5364', height: '176px', background: 'grey', fontWeight:'bold'}}>
                FRC Team App
            </CardTitle>
            <CardText>
            Developing an app with Xcode in Swift. Designed and integrated for the iPhone and will soon be published to the app store. Purpose of the app is to assist in the day-to-day 
            activities of the FRC team I am currently mentoring. The app integrates Firebase which allows the creation of accounts for each student that are then saved in the cloud and can be used to login to the app. This allows it to be privately accessed by the FRC team 8403 members only. The app will contain meeting forms, safety documents, robot update and all other news regarding FRC.
            Firebase used as data storage and user authentication.  
            </CardText>
            <CardActions border style={{background:'grey', fontWeight:'bold'}}>
                <Button href="https://github.com/Gurmie12/FRC-Iphone-App-" target="_blank" rel="noopener noreferrer" style={{color:"#2C5364"}}>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <h3 style={{color:'black'}}>Swift</h3>
            </CardMenu>
            </Card>
            </div>
        )
        }
    else if(this.state.activeTab === 1){
        return(
            <div className="projects-grid">
                <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#2C5364', height: '176px', background: 'grey', fontWeight:'bold'}}>
                Portfolio Website
            </CardTitle>
            <CardText>
                
                Designed and programmed a portfolio website using Node.Js, Javascript, React and HTML. Incorporated elegant design and attraction to all visitors.
                 Uploaded the website to a domain. Includes a download link to resume and an interactive contact page.
                  Planning on adding a log-in page for employers to access special features and for myself to easily add projects.
            </CardText>
            <CardActions border style={{background:'grey', fontWeight:'bold'}}>
                <Button href="https://github.com/Gurmie12/Portfolio-Website" target="_blank" rel="noopener noreferrer" style={{color:"#2C5364"}}>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <h4 style={{color:'black'}}> Node.js / React / HTML / CSS</h4>
            </CardMenu>
            </Card>

            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#2C5364', height: '176px', background: 'grey', fontWeight:'bold'}}>
                COVID-19 Live Website 
            </CardTitle>
            <CardText>
                
            Programmed and developed a React application that makes use of API fetched to render collected data to the clients side. Uses JavaScript and Node.Js. Website delivers live updates on current statistics regarding the COVID-19 pandemic.

            </CardText>
            <CardActions border style={{background:'grey', fontWeight:'bold'}}>
                <Button href="https://github.com/Gurmie12/COVID-19-FrontEnd" target="_blank" rel="noopener noreferrer" style={{color:"#2C5364"}}>GitHub</Button>
                <Button href="https://livecovid.net" target="_blank" rel="noopener noreferrer" style={{color:"#2C5364"}}>Website</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <h4 style={{color:'black'}}> React.JS / HTML / API / Javascript</h4>
            </CardMenu>
            </Card>

            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#2C5364', height: '176px', background: 'grey', fontWeight:'bold'}}>
                Project - Uni
            </CardTitle>
            <CardText>
                
            I know that sometimes it can be a difficult migration from highschool to university, regardless of the school. Especially due to current world circumstances, inquiring about specific topics at different schools can be an exceptionally demanding task.
            This is why I decided to develop Project-Uni. Project-Uni is an online forum for current and future university students who want to ask specific questions about their future or current school/program.
            This project was developed with pure HTML and Javascript, using Google Firebase authentication and Database API's to hold and secure user objects.
            </CardText>
            <CardActions border style={{background:'grey', fontWeight:'bold'}}>
                <Button href="https://github.com/Gurmie12/Project-Uni" target="_blank" rel="noopener noreferrer" style={{color:"#2C5364"}}>GitHub</Button>
                <Button href="https://project-uni.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{color:"#2C5364"}}>Website</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <h4 style={{color:'black'}}>HTML / Javascript / Google Firebase / API</h4>
            </CardMenu>
            </Card>
            </div>
        )
    }
    else if(this.state.activeTab === 2){
        return(
            <div className="projects-grid">

                <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#2C5364', height: '176px', background: 'grey', fontWeight:'bold'}}>
                 Ri3D (Robot in Three Days)
            </CardTitle>
            <CardText>
            Joined the Ri3D First robotics team at the University of Waterloo where we work over 3 days to build and program a robot that is able to compete in the current year FRC event.
             I had to problem solve many mechanical issues due to the time crunch and worked alongside a team.
              Video to the robot will be included as soon as it is uploaded. 
                <img
                alt="robot picture"
                src={ri3d}
                style={{height:'350px', width:'300px', textAlign:'center', paddingTop:'2em'}}
                />
            </CardText>
            <CardActions border style={{background:'grey', fontWeight:'bold'}}>
                <Button href="https://github.com/uwreact" target="_blank" rel="noopener noreferrer" style={{color:"#2C5364"}}>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <h3 style={{color:'black'}}>Mechanical</h3>
            </CardMenu>
            </Card>

            <Card shadow={10} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#2C5364', height: '176px', background: 'grey', fontWeight:'bold'}}>
                 Wheel Chair Cleaning Device 
            </CardTitle>
            <CardText>
               
                Built a mechanical wheelchair cleaning device that assists people struggling with wheelchair disabilities in cleaning the wheels of their wheelchair.
                    using mats for the ramp and paintbrush rollers to holm wheels. It contains bristle brushes. It is foldable with hinges located near ramps to increase mobility.
                <img
                alt="cleaner picture"
                src={cleaner}
                style={{height:'200px', width:'300px', textAlign:'center', paddingTop:'2em'}}
                />
            </CardText>
            <CardMenu style={{color: '#fff'}}>
            <h3 style={{color:'black'}}>Mechanical</h3>
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
                        C# / C++ / Swift
                    </Tab>
                    <Tab>
                        Web Development
                    </Tab>
                    <Tab>
                        Other
                    </Tab>

                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content" style={{ justifyContent: 'center'}}>
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;