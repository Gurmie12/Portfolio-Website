import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import profile from './Files/profile.png';

class LandingPage extends Component{

    constructor(props){
        super(props);
        this.state={
            likes: 47,
            updated: false
        }
    }
    
    updateLikes = () => {
        if(!this.state.updated){
            this.setState((prevState, props) =>{
                return{
                    likes: prevState.likes + 1,
                    updated: true
                };
            });
        } else{
            this.setState((prevState, props)=>{
                return{
                    likes:prevState.likes - 1,
                    updated: false
                };
            });
        }
    }
    
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className ="landingpage-grid">
                    <Cell col={12}>
                        <img 
                        src={profile}
                        alt="Profile Picture"
                        className="profilepic"
                        />

                        <div className="banner">
                            <h1>Biomedical Engineering Student / Software Developer</h1>

                        <hr/>

                        <p>C# | HTML | REACT | NODE JS | PYTHON | CSS | MATLABS | SOLIDWORKS | CO-FOUNDER OF HELMI-CORP</p>

                        <hr/>

                        <p>UNIVERSITY OF WATERLOO 24'</p>

                        <div className="social">

                            
                            <a href="https://ca.linkedin.com/in/gurman-brar-2866b4193" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                            <a href="https://github.com/Gurmie12" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                        </div>
                        </div>  
                    </Cell>
                    <div className="like-button">
                    <button onClick={this.updateLikes} ripple>Let everyone know you visited!</button>
                    <p>Visits: {this.state.likes}</p>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;