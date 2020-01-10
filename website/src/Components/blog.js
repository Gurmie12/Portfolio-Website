import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, List, ListItem, ListItemContent} from 'react-mdl';


class Blog extends Component{
    render(){
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
                        <img
                        src=''
                        alt=""
                        style={{}}
                        />
                    </CardActions>
                </Card>
                </div>
            </div>

        );
    }
}

export default Blog;