import React from 'react'

import styled from "styled-components"

import SpaceX from "../slides/SpaceX"
import Portfolio from "../slides/Portfolio"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import ReactProject from '../slides/ReactProject';
  


const ProjectsNavigation = styled.nav`
position: absolute;
right: 0;
top: 30px;
width: 280px;
height: 50px;
background: #651E3E;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px 0 30px;
font-family: 'Inconsolata', monospace;
`
const ProjectsNavigationList = styled.li`
align-items: center;
display: flex;
list-style: none;
color: white;
cursor: pointer;
&:hover {
    text-decoration: underline #DB6400;
    text-decoration-thickness: 2.5px;
}
`



function ProjectsNav() {



    return (
  <Router>
        <ProjectsNavigation>
            <ProjectsNavigationList><Link to="/projects">SpaceX</Link></ProjectsNavigationList>
            <ProjectsNavigationList><Link to="/projects:react">React</Link></ProjectsNavigationList>
            <ProjectsNavigationList><Link to="/portfolio">Portfolio</Link></ProjectsNavigationList>
      
        </ProjectsNavigation>
        <Switch>
          <Route path="/projects">
            <SpaceX></SpaceX>
          </Route>
          <Route path="/projects:react">
            <ReactProject></ReactProject>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
        </Switch>
        </Router>
    )
}

export default ProjectsNav