import React from 'react'

import { FaGithub } from "react-icons/fa"
import { MdColorLens } from "react-icons/md"
import { ImFontSize } from "react-icons/im"

import { ProjectInfoContainer, ProjectInfoHeadline, ProjectInfoButtonContainer, ProjectInfoParagraph, ProjectImage } from "./SpaceX"

import Portfolioimg from "../../../img/portfolio-img.png"



function Portfolio() {

    function toPortfolioGithub() {
        window.open("https://github.com/TrondSpjelkavik/portfolio-final")
    }

    return (
        <ProjectInfoContainer>
        <ProjectInfoHeadline>Portfolio</ProjectInfoHeadline>
            <ProjectInfoParagraph>
            I made this portfolio with React, and used styled components for styling. The colors:
           
            <li className="list-items">Pink <MdColorLens></MdColorLens> #651E3E</li>
            <li className="list-items">Cyan-blue <MdColorLens></MdColorLens> #051E3E</li>
            <li className="list-items">Orange <MdColorLens></MdColorLens> #DB6400</li>
           
            Fonts used is:
          
            <li className="list-items">Inconsolata <ImFontSize></ImFontSize> <a href="https://fonts.google.com/specimen/Inconsolata">Google Font</a></li>
            <li className="list-items">Roboto <ImFontSize></ImFontSize> <a href="https://fonts.google.com/specimen/Roboto">Google Font</a></li>
           
            </ProjectInfoParagraph>
            <ProjectInfoButtonContainer>
            <FaGithub className="github-icon" onClick={toPortfolioGithub}></FaGithub>
            </ProjectInfoButtonContainer>
            <ProjectImage src={Portfolioimg}></ProjectImage>
    </ProjectInfoContainer>
    )
}

export default Portfolio