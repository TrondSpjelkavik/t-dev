import React from 'react'

import { FaGithub } from "react-icons/fa"

import { ProjectInfoContainer, ProjectInfoHeadline, ProjectInfoButton, ProjectInfoButtonContainer, ProjectInfoParagraph, ProjectImage } from "./SpaceX"

import Portfolioimg from "../../media/img/portfolio-img.png"

function Portfolio() {
    return (
        <ProjectInfoContainer>
        <ProjectInfoHeadline>Portfolio</ProjectInfoHeadline>
        <ProjectInfoParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec aliquam ante. Quisque in mollis diam, et mollis sapien. Aenean sit 
            amet ultricies mi, a sodales metus. Aliquam eu iaculis ex. Proin condimentum lacus nibh, eu dictum mauris tempor id.</ProjectInfoParagraph>
            <ProjectInfoParagraph>
            In eros nunc, placerat luctus sem eu, sodales porttitor justo. Integer a maximus quam, a maximus massa. Integer id nibh dolor.
             Ut maximus libero enim. Integer sed arcu ut felis feugiat condimentum eget sed enim. Ut tempor maximus gravida.
            </ProjectInfoParagraph>
            <ProjectInfoButtonContainer>
            <ProjectInfoButton>View Site</ProjectInfoButton>
            <FaGithub className="github-icon"></FaGithub>
            </ProjectInfoButtonContainer>
            <ProjectImage src={Portfolioimg}></ProjectImage>
    </ProjectInfoContainer>
    )
}

export default Portfolio