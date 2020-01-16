import React, { Component } from 'react';
import logo from './Files/GurmansResume.png';
import file from './Files/GurmansResume.pdf';


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
                    <div className="resume-image">
                        <img
                        src = {logo}
                        alt = "Resume"
                        style={{height:"750px", width:"750px"}}
                        />
                    </div> 
                </div>
            </div>
        )
    }
}
export default Resume;