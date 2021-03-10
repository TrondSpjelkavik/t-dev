import React from "react";
import styled from "styled-components";

import { FaGithub } from "react-icons/fa";
import SpaceXimg from "../../../img/spacex-web.png";

export const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  margin: 80px 0 0 20px;
  font-family: "Inconsolata", monospace;
  @media (max-width: 800px) {
    align-items: center;
    margin: 100px 0 0 20px;
  }
`;

export const ProjectInfoHeadline = styled.h1`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
`;

export const ProjectInfoParagraph = styled.p`
  color: white;
  max-width: 350px;
  font-size: 16px;
  @media (max-width: 800px) {
    max-width: 320px;
  }
`;

export const ProjectInfoButton = styled.button`
  color: white;
  background: #651e3e;
  border: none;
  padding: 10px;
  font-size: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  &:hover {
    background: #db6400;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const ProjectInfoButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
  @media (max-width: 800px) {
    align-items: flex-start;
    width: 320px;
  }
`;

export const ProjectInfoButtonContainerSpacex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;

export const ProjectImage = styled.img`
  position: absolute;
  top: 120px;
  right: 10px;
  height: 300px;
  @media (max-width: 800px) {
    display: none;
  }
`;

function SpaceX() {
  function toSpacex() {
    window.open("https://t-dev.no/spacex-microsite/");
  }

  function toSpacexGithub() {
    window.open("https://github.com/TrondSpjelkavik/project-exam-1");
  }

  function toSpacexGrades() {
    window.open("https://t-dev.no/grades/grades-trond-spjelkavik.png");
  }

  return (
    <ProjectInfoContainer>
      <ProjectInfoHeadline>SpaceX microsite</ProjectInfoHeadline>
      <ProjectInfoParagraph>
        This project was the exam after one year at Noroff.
      </ProjectInfoParagraph>
      <ProjectInfoParagraph>
        The assignment was to build a microsite for SpaceX or NASA. The focus
        was on space technology. A microsite is a branded, self-contained site,
        usually on its own domain, with a single purpose and a limited number of
        pages. The purpose can be promotional or editorial, and be may linked to
        a specific event or period of time. A microsite is usually built as an
        addition to an existing brand website.
      </ProjectInfoParagraph>
      <ProjectInfoButtonContainerSpacex>
        <ProjectInfoButton onClick={toSpacex}>View site</ProjectInfoButton>
        <ProjectInfoButton onClick={toSpacexGrades}>
          View grades
        </ProjectInfoButton>
        <FaGithub className="github-icon" onClick={toSpacexGithub}></FaGithub>
      </ProjectInfoButtonContainerSpacex>
      <ProjectImage src={SpaceXimg}></ProjectImage>
    </ProjectInfoContainer>
  );
}

export default SpaceX;
