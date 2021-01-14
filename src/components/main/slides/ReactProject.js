import React from 'react'


import { FaGithub } from "react-icons/fa"
import Workoutimg from "../../media/img/workout-app.gif"

import { ProjectInfoContainer, ProjectInfoHeadline, ProjectInfoButton, ProjectInfoButtonContainer, ProjectInfoParagraph, ProjectImage } from "./SpaceX"



import styled from "styled-components"

const GIFcontainer = styled.div`
position: absolute;
right: 100px;
top: 0;
`



function ReactProject() {

    function toWorkoutApp() {
        window.open("https://expo.io/@trondspjelkavik/projects/easy-workout")
    }

    function toWorkoutAppGithub() {
        window.open("https://github.com/TrondSpjelkavik/workout-app-native")
    }

    return (
        <ProjectInfoContainer>
        <ProjectInfoHeadline>React Native APP</ProjectInfoHeadline>
        <ProjectInfoParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec aliquam ante. Quisque in mollis diam, et mollis sapien. Aenean sit 
            amet ultricies mi, a sodales metus. Aliquam eu iaculis ex. Proin condimentum lacus nibh, eu dictum mauris tempor id.</ProjectInfoParagraph>
            <ProjectInfoParagraph>
            In eros nunc, placerat luctus sem eu, sodales porttitor justo. Integer a maximus quam, a maximus massa. Integer id nibh dolor.
             Ut maximus libero enim. Integer sed arcu ut felis feugiat condimentum eget sed enim. Ut tempor maximus gravida.
            </ProjectInfoParagraph>
            <ProjectInfoButtonContainer>
            <ProjectInfoButton onClick={toWorkoutApp}>View Site</ProjectInfoButton>
            <FaGithub className="github-icon" onClick={toWorkoutAppGithub}></FaGithub>
            </ProjectInfoButtonContainer>
            <GIFcontainer>
            <ProjectImage src={Workoutimg}></ProjectImage>
            </GIFcontainer>
    </ProjectInfoContainer>
    )
}

export default ReactProject