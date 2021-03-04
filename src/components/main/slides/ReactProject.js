import React from 'react'


import { FaGithub } from "react-icons/fa"
import Workoutimg from "../../../img/workout-app.gif"

import { ProjectInfoContainer, ProjectInfoHeadline, ProjectInfoButton, ProjectInfoParagraph, ProjectImage } from "./SpaceX"



import styled from "styled-components"

const GIFcontainer = styled.div`
position: absolute;
right: 100px;
top: 0;
`

export const ReactInfoButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 200px;
align-items: center;

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
        <ProjectInfoHeadline>React Native app</ProjectInfoHeadline>
        <ProjectInfoParagraph>I wanted to learn more about React Native, and created a workout App called Easy Workout.</ProjectInfoParagraph>
            <ProjectInfoParagraph>
            The project is made with <a href="https://expo.io">expo</a> and React Native. For navigation i used @react-navigation, and images are from <a href="https://thenounproject.com/AliceNoir/collection/fitness-exercises/">Noun Project</a>.
            The app is under development, and this is a learning experience for me. Click view in expo under and download expo app to view the app.

            </ProjectInfoParagraph>
            <ReactInfoButtonContainer>
            <ProjectInfoButton onClick={toWorkoutApp}>View in Expo</ProjectInfoButton>
            <FaGithub className="github-icon" onClick={toWorkoutAppGithub}></FaGithub>
            </ReactInfoButtonContainer>
            <GIFcontainer>
            <ProjectImage src={Workoutimg}></ProjectImage>
            </GIFcontainer>
    </ProjectInfoContainer>
    )
}

export default ReactProject