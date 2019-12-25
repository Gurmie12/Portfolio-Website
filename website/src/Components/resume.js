import React, { Component } from 'react';
import { promises } from 'dns';
import logo from './Files/GurmanBrar-Resume.png';
import file from './Files/GurmanBrar-Resume.pdf';


class Resume extends Component{
    render(){
        return(
            <div className="resume-page">
                <h2>CLICK THE LINK BELOW TO DOWNLOAD AN UPDATED RESUME</h2>
                <div className="resume-break">
                    <hr/>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <a download href={file}>Download Resume here</a>
                    <hr/> 
                    <img
                    src = {logo}
                    alt = "Resume"
                    style={{height:"750px", width:"750px"}}
                    />
                </div>
            </div>
        )
    }
}
export default Resume;