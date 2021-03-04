import React from 'react'


import styled from "styled-components"
import { OrangeLine } from "./About"

import ProjectsNav from "./extra/ProjectsNav"




export const PageContainer = styled.div`
display: flex;
justify-content: center;
position: relative;
`


export const ProjectsContainer = styled.div`
position: absolute;
top: 300px;
width: 100%;
height: 500px;
background: #051E3E;
max-width: 800px;
@media (max-width: 800px) {
    align-items: center;
  }

  @media (max-width: 414px) and (max-height: 667px) {
    top: 100px !important;
  }
  @media (max-height: 859px) {
    
    top: 250px;
  }
  @media (max-height: 760px) {
    
    top: 200px;
  }


`

export const PageHeadline = styled.h1`
color: white;
text-align: center;
position: absolute;
top: 180px;
font-family: 'Inconsolata', monospace;
width: 100%;

@media (max-width: 414px) and (max-height: 667px) {
  top: 25px !important;
}

@media (max-height: 760px) {
    
  top: 125px;
}
`


function Projects() {
    return (
            <div>
              <PageContainer>
          <PageHeadline>Projects<OrangeLine></OrangeLine></PageHeadline>
          <ProjectsContainer>
              <ProjectsNav></ProjectsNav>
              
        </ProjectsContainer>
     
        </PageContainer>
       
        </div>
 
    
    )
}

export default Projects
