import React from 'react'
import emailjs from "emailjs-com";
import styled from "styled-components"

import { PageContainer} from "./Projects"
import { OrangeLine } from "./About"
import { SocialIcons } from "./Footer"

import { FaLinkedinIn, FaFacebookF, FaGithub, FaWindowClose } from "react-icons/fa"

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
@media(max-width: 800px) {
    height: 600px;
  
}
@media(max-width: 468px) and (max-height: 667px) {
    top: 60px !important;
   
}

@media (max-height: 859px) {
    
    top: 200px;
  }
  @media (max-height: 760px) {
    
    top: 150px;
  }

`
const SubHeadlineContact = styled.h3`
position: absolute;
margin-top: 85px;
text-align: center;
left: 50%;
transform: translateX(-50%);
font-weight: 400;
@media(max-width: 800px) {
    display: none;
}
@media(max-width: 468px) {
    display: block;
    white-space: nowrap;
   
}

`
const ContactHeadline = styled.h1`
position: absolute;
margin-top: 20px;
text-align: center;
left: 50%;
transform: translateX(-50%);
font-family: 'Roboto', sans-serif;
letter-spacing: 1px;
@media(max-width: 800px) {
    display: none;
}

@media(max-width: 468px) {
    display: block;
}


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
@media(max-width: 800px) {
    display: none;
}

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
  @media(max-width: 468px) {
    height: 450px;
    margin-top: 40px;
}
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
color: white;
font-size: 20px;
border: 1px solid white;
background: transparent;
&::placeholder {
    padding: 5px 0 0 5px;
    font-size: 16px;
}
@media(max-width: 468px) {
    width: 250px;
}
`

const ContactButton = styled.button`
position: relative;
width: fit-content;
padding: 10px;
font-size: 18px;
font-family: 'Roboto', sans-serif;
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
@media(max-width: 800px) {
    right: 20px;
    top: 530px;
}
`

const SocialIconsContainerContact = styled.div`
cursor: pointer;
padding: 5px 0 5px 0;
&:hover {
    border-bottom: 2px solid #DB6400;
    border-top: 2px solid #DB6400;
}
`
const SendSuccessfully = styled.div`
position: absolute;
top: 300px;
width: 100%;
height: 550px;
background: #051E3E;
z-index: 99;
max-width: 800px;
color: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display: none;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
@media(max-width: 800px) {
    height: 600px;
  
}
@media(max-width: 468px) {
    top: 100px;
   
}
@media (max-height: 859px) {
    
    top: 200px;
  }
  @media (max-height: 760px) {
    
    top: 150px;
  }

`

const SendSuccessfullyHeadline = styled.h2`
text-align: center;
color: white;
width: 100%;
@media(max-width: 414px) {
  position: relative;
  top: 50px;
}

`


const SendSuccessfullyParagraph = styled.p`
font-size: 20px;
text-align: center;
color: white;
width: 100%;
@media(max-width: 414px) {
  font-size: 16px;
 
}
`


const CloseSuccessBox = styled.div`
position: absolute;
right: 10px;
top: 10px;
`

const SendSuccessfullySocialIconsContainer = styled.div`
justify-content: space-around;
width: 50%;
display: flex;
position: relative;
top: -120px;
@media(max-width: 468px) {
    width: 70%;
   
}
`

const ErrorMessage = styled.p`
font-size: 14px;
color: #DB6400;
position: relative;
top: -10px;
display: none;
`


function Contact() {

    
  function sendEmail(e) {
    e.preventDefault();

    const sendSuccess = document.querySelector(".send-success")
   
    const name = document.querySelector("#name");
    const nameValue = name.value;
    const email = document.querySelector("#email");
    const emailValue = email.value;
    const message = document.querySelector("#message");
    const messageValue = message.value;

    const messageError = document.querySelector(".message-error");
    const nameError = document.querySelector(".name-error");
    const emailError = document.querySelector(".email-error");


    
  if (checkInputLength(nameValue) === true) {
 
    nameError.style.display = "none";
   
  } else {
  
    nameError.style.display = "block";
    
  }
  if (checkInputLength(emailValue) === true) {
   
    emailError.style.display = "none";
  
  } else {
  
    emailError.style.display = "block";
  
  }
  if (checkInputLength(messageValue) === true) {

    messageError.style.display = "none";
 
  } else {
 
    messageError.style.display = "block";
   
  }

  if (
    checkInputLength(nameValue) &&
    checkInputLength(emailValue) &&
    checkInputLength(messageValue)
  ) {
    sendSuccess.style.display = "flex"
    
        setTimeout(() => {
        const inputText = document.querySelectorAll(".input-text")
        let i;
        for(i = 0; i < inputText.length; i++) {
            inputText[i].value = ""
        }
        },1000);
        
      

  }

  function checkInputLength(value) {
    const valueTrim = value.trim();
  
    if (valueTrim.length > 2) {
      return true;
    } else {
      return false;
    }
  }
  function validateMail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  }
   

    emailjs
      .sendForm(
        "service_plfo1kd",
        "template_kkpxw6b",
        e.target,
        "user_52jqUDYPE2zXCn1aGnDIP"
      )
      .then(
        (result) => {
           
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

    function closeWindow() {
        const sendSuccess = document.querySelector(".send-success")
        sendSuccess.style.display = "none"
    }

    function toGithub() { 
        window.open('https://github.com/TrondSpjelkavik');
    }

    function toLinkedin() { 
        window.open('https://www.linkedin.com/in/trond-fuglseth-spjelkavik-80871552/');
    }

    function toFacebook() { 
        window.open('https://www.facebook.com/Trondchivu');
    }


    return (
        <PageContainer>
            <SendSuccessfully className="send-success">
                <CloseSuccessBox>
                    <FaWindowClose className="close-icon" onClick={closeWindow}></FaWindowClose>
                </CloseSuccessBox>
                <SendSuccessfullyHeadline>Message successfully sent</SendSuccessfullyHeadline>
                <SendSuccessfullyParagraph >Thank you for sending me a message. I will reply as soon as possible.</SendSuccessfullyParagraph>
                <SendSuccessfullySocialIconsContainer>
                <SocialIcons>
                <FaGithub className="social-icons" onClick={toGithub}></FaGithub>
                </SocialIcons>
                <SocialIcons>
                <FaLinkedinIn className="social-icons" onClick={toLinkedin}></FaLinkedinIn>
                </SocialIcons>
                <SocialIcons>
                <FaFacebookF className="social-icons" onClick={toFacebook}></FaFacebookF>
                </SocialIcons>
                </SendSuccessfullySocialIconsContainer>
            </SendSuccessfully>
        <ContactContainer>
            <ContactHeadlineBox> </ContactHeadlineBox>
            <ContactHeadline>Contact<OrangeLine></OrangeLine></ContactHeadline>
            <SubHeadlineContact>Let's work together</SubHeadlineContact>
            <ContactForm onSubmit={sendEmail}>
            <LabelBox>From:</LabelBox>
            <InputContact className="input-text" id="name" type="text" name="name" placeholder="Name"></InputContact>
            <ErrorMessage className="name-error">Please fill in your name</ErrorMessage>
            <InputContact className="input-text" id="email" type="text" name="email" placeholder="E-mail"></InputContact>
            <ErrorMessage className="email-error">Please fill in your email</ErrorMessage>
            <TextareaContact className="input-text" id="message" name="message" placeholder="Message.."></TextareaContact>
            <ErrorMessage className="message-error">Please write a message</ErrorMessage>
            <ContactButton type="sumbit" >Send</ContactButton>
            </ContactForm>
      <SocialIconsContact>
          <SocialIconsContainerContact>
          <FaGithub className="social-icons" onClick={toGithub}></FaGithub>
          </SocialIconsContainerContact>
          <SocialIconsContainerContact>
          <FaLinkedinIn className="social-icons" onClick={toLinkedin}></FaLinkedinIn>
          </SocialIconsContainerContact>
          <SocialIconsContainerContact>
          <FaFacebookF className="social-icons" onClick={toFacebook}></FaFacebookF>
          </SocialIconsContainerContact>
      </SocialIconsContact>
        </ContactContainer>
        </PageContainer>
    )
}

export default Contact
