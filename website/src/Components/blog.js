import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, List, ListItem, ListItemContent} from 'react-mdl';


class Blog extends Component{
    render(){
        return(

            <div className="intro-text">
            <h1>Welcome to the Helmi-Corp Blog</h1>
            <h3>The source for all updates and advances in the product and corporation</h3>
            </div>
            
            <div clasName="list">
            <List style={{width: '650px'}}>
                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="Co-Founder of Helmi-Corp and student in Biomedical Engineering at University of Waterloo">Gurman Brar</ListItemContent>
                </ListItem>
                <ListItem threeLine>
                    <ListItemContent avatar="person" subtitle="Co-Founder of Helmi-Corp and student in Biomedical Engineering at University of Waterloo">Eknoor Singh</ListItemContent>
                </ListItem>
            </List>
            </div>

            <div className="blog-cards">
                <Card shadow={3} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'bottom right 15% no-repeat #46B6AC'}}>Helmi-Corp Launch</CardTitle>
                        <CardText>
                            Descriptive text
                        </CardText>
                    <CardActions border>
                        <Button style={{color:'red'}}></Button>        
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Blog;