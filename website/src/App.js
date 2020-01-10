import React from 'react';
import './App.css';

// Import the used React mdl objects from the library instance.

import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

import Main from './Components/main';

import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="Gurman Brar" scroll>
                <Navigation>
                        <Link to="/home">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>
                </Navigation>
            </Header>
            <Drawer title="Welcome!">
                <Navigation>
                        <Link to="/home">Home</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/blog">Blog</Link>
                </Navigation>
            </Drawer>
            <Content>
            <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
            </div>
  );
}

export default App;
