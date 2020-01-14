import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import profile from './Files/profile.png';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 1500,
            density:{
                enable: true,
                value_area: 30
            }
        }
    }
}

class LandingPage extends Component{
    
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
                        <Particles params={{particleOpt}}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;