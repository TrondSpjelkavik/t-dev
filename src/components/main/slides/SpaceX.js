import React from 'react'
import styled from "styled-components"

import { FaGithub } from "react-icons/fa"
import SpaceXimg from "../../media/img/spacex-web.png"


export const ProjectInfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 450px;
margin: 80px 0 0 20px;
font-family: 'Inconsolata', monospace;
`

export const ProjectInfoHeadline = styled.h1`
color: white;

`

export const ProjectInfoParagraph = styled.p`
color: white;

max-width: 400px;

font-size: 16px;
font-weight: 400;
`

export const ProjectInfoButton = styled.button`
color: white;
background: #651E3E;
border: none;
padding: 10px;
font-size: 18px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
cursor: pointer;
font-family: 'Inconsolata', monospace;
&:hover {
    background: #db6400;
}
`

export const ProjectInfoButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 200px;
align-items: center;
`

export const ProjectImage = styled.img`
position: absolute;
top: 120px;
right: 10px;
height: 300px;

`

function SpaceX() {

    function toSpacex() {
        window.open("https://t-dev.no/spacex-microsite/")
    }

    function toSpacexGithub() {
        window.open("https://github.com/TrondSpjelkavik/project-exam-1")
    }

    return (
        <ProjectInfoContainer>
            <ProjectInfoHeadline>SpaceX microsite</ProjectInfoHeadline>
            <ProjectInfoParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec aliquam ante. Quisque in mollis diam, et mollis sapien. Aenean sit 
                amet ultricies mi, a sodales metus. Aliquam eu iaculis ex. Proin condimentum lacus nibh, eu dictum mauris tempor id.</ProjectInfoParagraph>
                <ProjectInfoParagraph>
                In eros nunc, placerat luctus sem eu, sodales porttitor justo. Integer a maximus quam, a maximus massa. Integer id nibh dolor.
                 Ut maximus libero enim. Integer sed arcu ut felis feugiat condimentum eget sed enim. Ut tempor maximus gravida.
                </ProjectInfoParagraph>
                <ProjectInfoButtonContainer>
                <ProjectInfoButton onClick={toSpacex}>View Site</ProjectInfoButton>
                <FaGithub className="github-icon" onClick={toSpacexGithub}></FaGithub>
                </ProjectInfoButtonContainer>
                <ProjectImage src={SpaceXimg}></ProjectImage>
        </ProjectInfoContainer>
    )
}

export default SpaceX
