import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';
import AboutMe from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';
import Blog from './blog'

const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route path ="/aboutme" component={AboutMe} />
        <Route path ="/resume" component={Resume} />
        <Route path ="/projects" component={Projects} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/home" component={LandingPage}/>
        <Route path ="/blog" component={Blog}/>
    </Switch>
)

export default Main;