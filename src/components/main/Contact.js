import React from 'react'

import styled from "styled-components"

import { PageContainer} from "./Projects"
import { OrangeLine } from "./About"

import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa"

const ContactContainer = styled.div`
position: absolute;
top: 300px;
width: 100%;
height: 550px;
background: #051E3E;
max-width: 800px;
font-family: 'Inconsolata', monospace;
color: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


`
const SubHeadlineContact = styled.h3`
position: absolute;
margin-top: 80px;
text-align: center;
left: 50%;
transform: translateX(-50%)
`
const ContactHeadline = styled.h1`
position: absolute;
margin-top: 20px;
text-align: center;
left: 50%;
transform: translateX(-50%)

`

const ContactHeadlineBox = styled.div`
text-align: center;
top: 0;
position: absolute;
height: 0;
width: 0;
border-left: 400px solid transparent;
border-right: 400px solid transparent;
border-top: 170px solid rgba(3, 14, 29, 0.3);
`

const ContactForm = styled.form`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 450px;
  max-width: 500px;
  top: 100px;
  margin-left: 50px;
`

const LabelBox = styled.label`
position: relative;
font-size: 24px;
`

const InputContact = styled.input`
position: relative;
color: white;
width: 200px;
padding: 10px 10px 0 0;
background: transparent;
border: none;
border-bottom: 2px solid white;
font-size: 18px;
&::placeholder {
    font-size: 18px;
}
`

const TextareaContact = styled.textarea`
position: relative;
width: 400px;
height: 150px;
border: 1px solid white;
background: transparent;
&::placeholder {
    padding: 5px 0 0 5px;
    font-size: 16px;
}
`

const ContactButton = styled.button`
position: relative;
width: fit-content;
padding: 10px;
font-size: 18px;
font-family: 'Inconsolata', monospace;
color: white;
background: #651E3E;
cursor: pointer;
border: none;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
&:hover {
    background: rgba(219,100,0, 0.9);
}
`

const SocialIconsContact = styled.div`
position: absolute;
right: 50px;
top: 100px;
width: 150px;
height: 50px;

display: flex;
align-items: center;
justify-content: space-around;
`

const SocialIconsContainer = styled.div`
cursor: pointer;
padding: 5px 0 5px 0;
&:hover {
    border-bottom: 2px solid #DB6400;
    border-top: 2px solid #DB6400;

}
`

function Contact() {
    return (
        <PageContainer>
        <ContactContainer>
            <ContactHeadlineBox> </ContactHeadlineBox>
            <ContactHeadline>Contact<OrangeLine></OrangeLine></ContactHeadline>
            <SubHeadlineContact>Let's work together</SubHeadlineContact>
            <ContactForm>
            <LabelBox>From:</LabelBox>
            <InputContact type="text" name="name" placeholder="Name"></InputContact>
            <InputContact type="text" name="email" placeholder="E-mail"></InputContact>
            <TextareaContact name="message" placeholder="Message.."></TextareaContact>
            <ContactButton type="sumbit" >Send</ContactButton>
            </ContactForm>
      <SocialIconsContact>
          <SocialIconsContainer>
          <FaGithub className="social-icons"></FaGithub>
          </SocialIconsContainer>
          <SocialIconsContainer>
          <FaLinkedinIn className="social-icons"></FaLinkedinIn>
          </SocialIconsContainer>
          <SocialIconsContainer>
          <FaFacebookF className="social-icons"></FaFacebookF>
          </SocialIconsContainer>
      </SocialIconsContact>
        </ContactContainer>
        </PageContainer>
    )
}

export default Contact
