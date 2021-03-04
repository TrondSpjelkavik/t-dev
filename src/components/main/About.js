import React from 'react'
import styled from "styled-components"
import SalesIcon from "../../svg/sales-icon.svg"
import FeatherIcon from "../../svg/feather-icon.svg"
import TeamWorkIcon from "../../svg/teamwork-icon.svg"
import NoroffIcon from "../../img/noroff-icon.png"
import Trond from "../../img/trond.png"
import Chart from "../main/extra/Chart"


const AboutContainer = styled.div`
position: relative;
font-family: 'Inconsolata', monospace;
min-height: 1600px;
@media (max-height: 700px) {
  
    margin-top: 150px;
  }
  @media (max-height: 550px) {
  
    margin-top: 250px;
  }
`

const AboutHeadline = styled.h1`
text-align: center;
color: white;
font-family: 'Roboto', sans-serif;
@media (max-height: 700px) {
    
    margin-top: 100px;
  }
`

export const OrangeLine = styled.div`
width: 40px;
height: 5px;
background: #DB6400;
text-align: center;
margin: 0 auto;
justify-content: center;
margin-top: 10px;
margin-bottom: 80px;

`

const TechStackContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
max-width: 800px;
margin: 0 auto;
@media (max-width: 700px) {
    
  
  }


`

const TechStack = styled.div`
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
height: 150px;
width: 120px;
background: #051E3E;
align-items: center;
justify-content: center;
display: flex;
position: relative;
@media (max-width: 700px) {
    height: 100px;
    width: 80px;
}
@media (max-width: 320px) {
  height: 90px;
  width: 70px;
}

`
const TechHeadline = styled.p`
font-size: 18px;
color: white;
margin-top: 20px;
@media (max-width: 700px) {
    font-size: 16px;
}
`

const AboutMeContainer = styled.div`
display: flex;
justify-content: space-around;
max-width: 800px;
margin: 0 auto;
padding-top: 100px;
@media (max-width: 700px) {
    flex-direction: column;
    max-width: 320px
  
  }
`

const AboutMeText = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
@media (max-width: 700px) {
    height: 500px;
    margin-top: 50px;
  }


`

const AboutMeHeadline = styled.h2`
font-size: 30px;
color: white;
font-family: 'Roboto', sans-serif;
font-weight: 400;
@media (max-width: 700px) {
    text-align: center;
  
  }

`

const AboutMeParagraph = styled.p`
font-size: 18px;
color: white;
margin-bottom: 30px;
max-width: 500px;

`

const AboutMeOrangeLine = styled.div`
width: 60px;
height: 5px;
background: #DB6400;
margin-bottom: 30px;
margin-left: 30px;
margin-top: 3px;
@media (max-width: 700px) {
    margin: 0 auto;
    margin-bottom: 50px;
  }

`



function About() {
    return (
        <AboutContainer>
            <AboutHeadline>Who am I</AboutHeadline>
            <OrangeLine></OrangeLine>
            <TechStackContainer>
                <TechStack>
                    <img className="icons " src={SalesIcon} alt="sales icon"></img>
                </TechStack>
                <TechStack>
                <img className="icons teamwork" src={TeamWorkIcon} alt="teamwork icon"></img>
                </TechStack>
                <TechStack>
                <img className="icons noroff" src={NoroffIcon} alt="noroff school icon"></img>
                </TechStack>
                <TechStack>
                <img className="icons-feather feather" src={FeatherIcon} alt="feather icon"></img>
                </TechStack>
              
            </TechStackContainer>
            <TechStackContainer> 
           
            <TechHeadline>Sales</TechHeadline>
            <TechHeadline>Teamwork</TechHeadline>
          
            <TechHeadline className="noroff-icon-text">Noroff</TechHeadline>
            <TechHeadline className="tech-icon-text">Tech</TechHeadline>
           
            </TechStackContainer>

            <Chart></Chart>
            <AboutMeContainer>
                <img className="trond" src={Trond} alt="Trond Fuglseth Spjelkavik"></img>
                <AboutMeText>
                    <AboutMeHeadline>About me</AboutMeHeadline>
                    <AboutMeOrangeLine></AboutMeOrangeLine>
                    <AboutMeParagraph>
                    Currently studying Front-End Developer @ Noroff - 
                    School of technology and digital media.
                    </AboutMeParagraph>
                    <AboutMeParagraph>
                        With long and broad experience in sales and teamwork, 
                        I have a high work capacity and solving the customer's needs in a good and efficient way.
                         I am a problem solver who enjoys working both independently and with others.

                    </AboutMeParagraph>
                </AboutMeText>
            </AboutMeContainer>
         
        </AboutContainer>
    )
}

export default About
