import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, List, ListItem, ListItemContent, Tabs, Tab, Grid, Cell} from 'react-mdl';
import day1pic from './Files/IMG_3502.JPG';


class Blog extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="blog-page">
                <h1>Welcome to the Helmi-Corp Blog</h1>
                <h3>The source for all updates and advances in the product and corporation</h3>
            <div className="list">
            <List style={{width: '400px'}}>
                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="Co-Founder of Helmi-Corp and student in Biomedical Engineering at University of Waterloo">Gurman Brar</ListItemContent>
                </ListItem>
                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="Co-Founder of Helmi-Corp and student in Biomedical Engineering at University of Waterloo">Eknoor Singh</ListItemContent>
                </ListItem>
            </List>
            </div>
            
            <div className="blog-posts">
                <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'bottom right 15% no-repeat #2C5364'}}>Start of a journey</CardTitle>
                        <CardText>
                            Today is the day we finalized the making of the Helmi-Corp brand. You can join us here on this blog to follow our progress on the prototype
                            and all other iterations to this mission.
                        </CardText>
                    <CardActions border>
                    </CardActions>
                </Card>
                </div>
            </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="blog-page">
                <h1>Welcome to the Mentor Page for FRC team #8403</h1>
                <h3>The source for all updates and advances in the making of this years robot</h3>
            <div className="list">
            <List style={{width: '400px'}}>
                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="Mentor for FRC team #8403 from Glendale secondary school, located in Hamilton, ON">Gurman Brar</ListItemContent>
                </ListItem>
            </List>
            </div>
            
            <div className="blog-posts">
                <Card shadow={3} style={{width: '490px', height: '580px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'bottom right 15% no-repeat #2C5364'}}>Day 1 - Building of the chasis (Sat, Jan 11, 2019)</CardTitle>
                        <CardText>
                            Today we worked on constructing the chasis of the robot. We assembled the metal frame and installed the drive gears. This years chasis consists of a 6 wheel-drive train.
                            We incorporated the instalation of the gear box (for gear reduction) and all four of the drive motors. We began looking into the basics of the code, including object instantiation and
                            method production to create a usable remote-control algorithim. The itinerary for next meeting would be to configure the wiring for the drive motors and the micro controller. We will also explore
                            testing and debugging some of the code. 
                            <img
                            src={day1pic}
                            alt="Robot"
                            style={{width: '480px', height: '550x', paddingTop: '2em', paddingBottom: '1em'}}
                            />
                        </CardText>
                    <CardActions border>
                        <button border style={{color:'#2C5364', width:'75px', height:'60px'}} href="">Check the code out by clicking here</button>
                    </CardActions>
                </Card>
                </div>
            </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple>
                    <Tab>
                        Helmi-Corp
                    </Tab>
                    <Tab>
                        FRC Mentor
                    </Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        );
    }
}

export default Blog;