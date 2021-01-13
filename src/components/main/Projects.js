import React from 'react'


import styled from "styled-components"
import { OrangeLine } from "./About"

import ProjectsNav from "./extra/ProjectsNav"


export const PageContainer = styled.div`
display: flex;
justify-content: center;

`


export const ProjectsContainer = styled.div`
position: absolute;
top: 300px;
width: 100%;
height: 550px;
background: #051E3E;
max-width: 800px;



`

export const PageHeadline = styled.h1`
color: white;
text-align: center;
position: absolute;
top: 180px;
font-family: 'Inconsolata', monospace;
width: 100%;
`


function Projects() {
    return (
      <PageContainer>
          <PageHeadline>Projects<OrangeLine></OrangeLine></PageHeadline>
          <ProjectsContainer>
              <ProjectsNav></ProjectsNav>
              
        </ProjectsContainer>
        
        </PageContainer>
    )
}

export default Projects
