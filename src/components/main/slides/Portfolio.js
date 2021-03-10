import React from "react";
import styled from "styled-components";

import { FaGithub } from "react-icons/fa";

import {
  ProjectInfoContainer,
  ProjectInfoHeadline,
  ProjectInfoButtonContainer,
  ProjectInfoParagraph,
} from "./SpaceX";

import Portfolioimg from "../../../img/Go-Logo_Blue.svg";

const GoImage = styled.img`
  position: absolute;
  top: 100px;
  right: 10px;
  height: 300px;
  @media (max-width: 800px) {
    display: none;
  }
`;

function Portfolio() {
  function toPortfolioGithub() {
    window.open("https://github.com/TrondSpjelkavik/minor-go-projects");
  }

  return (
    <ProjectInfoContainer>
      <ProjectInfoHeadline>Go projects</ProjectInfoHeadline>
      <ProjectInfoParagraph>
        I wanted to learn more about Go and bought the book{" "}
        <a href="http://www.gopl.io/"> Go programming language</a> by Alan
        Donovan and Brian Kernighan.
      </ProjectInfoParagraph>
      <ProjectInfoParagraph>
        The Go language is advanced and reliable, offering great built-in ways
        to handle error. It is efficient, compiling down to on binary. Go
        enhances the availability and reliability of services and increases code
        readability through it simplicity.
      </ProjectInfoParagraph>
      <ProjectInfoButtonContainer>
        <FaGithub
          className="github-icon"
          onClick={toPortfolioGithub}
        ></FaGithub>
      </ProjectInfoButtonContainer>
      <GoImage src={Portfolioimg}></GoImage>
    </ProjectInfoContainer>
  );
}

export default Portfolio;
