import React from "react";

import styled from "styled-components";

import SpaceX from "../slides/SpaceX";
import Portfolio from "../slides/Portfolio";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import ReactProject from "../slides/ReactProject";

const ProjectsNavigation = styled.nav`
  position: absolute;
  right: 0;
  top: 30px;
  width: 280px;
  height: 50px;
  background: #651e3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  z-index: 4;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-around;
    padding: 0;
  }
`;
const ProjectsNavigationList = styled.li`
  align-items: center;
  display: flex;
  list-style: none;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline #db6400;
    text-decoration-thickness: 2px;
  }
`;

function ProjectsNav() {
  return (
    <Router>
      <ProjectsNavigation>
        <ProjectsNavigationList>
          <NavLink
            to="/projects"
            activeStyle={{
              textDecoration: "underline #db6400",
              textDecorationThickness: "3px",
            }}
          >
            SpaceX
          </NavLink>
        </ProjectsNavigationList>
        <ProjectsNavigationList>
          <NavLink
            to="/react"
            activeStyle={{
              textDecoration: "underline #db6400",
              textDecorationThickness: "3px",
            }}
          >
            E-commerce
          </NavLink>
        </ProjectsNavigationList>
        <ProjectsNavigationList>
          <NavLink
            to="/portfolio"
            activeStyle={{
              textDecoration: "underline #db6400",
              textDecorationThickness: "3px",
            }}
          >
            Go
          </NavLink>
        </ProjectsNavigationList>
      </ProjectsNavigation>
      <Switch>
        <Route path="/projects">
          <SpaceX></SpaceX>
        </Route>
        <Route path="/react">
          <ReactProject></ReactProject>
        </Route>
        <Route path="/portfolio">
          <Portfolio></Portfolio>
        </Route>
      </Switch>
    </Router>
  );
}

export default ProjectsNav;
