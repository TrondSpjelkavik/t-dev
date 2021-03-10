import React from "react";

import { FaGithub } from "react-icons/fa";
import MoominGif from "../../../img/moomin-store-gif.gif";

import {
  ProjectInfoContainer,
  ProjectInfoHeadline,
  ProjectInfoButton,
  ProjectInfoParagraph,
} from "./SpaceX";

import styled from "styled-components";

const GIFcontainer = styled.div`
  position: absolute;
  right: 100px;
  top: 0;
`;

export const ReactInfoButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
`;

const MoominImage = styled.img`
  position: absolute;
  top: 150px;
  right: -90px;
  height: 190px;
  cursor: pointer;
  &:hover {
    height: 400px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

function ReactProject() {
  function toMoominStore() {
    window.open("https://t-dev.no/semester-project");
  }

  function toWorkoutAppGithub() {
    window.open("https://github.com/TrondSpjelkavik/semester-project");
  }

  return (
    <ProjectInfoContainer>
      <ProjectInfoHeadline>Moomin Store</ProjectInfoHeadline>
      <ProjectInfoParagraph>
        This project was the semester exam after one and half year at Noroff
      </ProjectInfoParagraph>
      <ProjectInfoParagraph>
        The assignment was to create an e-commerce website that has both
        customer-facing and admin sections. The website was populated by my own{" "}
        <a href="https://mummi-api.herokuapp.com/moomin-cups">API</a>. On the
        right is a gif of the admin section of the website. I also created a
        register form that register users on the API with a token and key.
      </ProjectInfoParagraph>
      <ReactInfoButtonContainer>
        <ProjectInfoButton onClick={toMoominStore}>View Site</ProjectInfoButton>
        <FaGithub
          className="github-icon"
          onClick={toWorkoutAppGithub}
        ></FaGithub>
      </ReactInfoButtonContainer>
      <GIFcontainer>
        <MoominImage src={MoominGif}></MoominImage>
      </GIFcontainer>
    </ProjectInfoContainer>
  );
}

export default ReactProject;
