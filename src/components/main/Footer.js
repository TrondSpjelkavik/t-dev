import React from 'react'
import styled from "styled-components"
import { GoArrowUp } from "react-icons/go"
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa"


const FooterContainer = styled.footer`
height: 200px;
width: 100%;
background: #051E3E;
font-family: 'Inconsolata', monospace;
position: relative;
justify-content: center;
`

const ToTheTop = styled.button`
position: absolute;
top: -25px;
left: 50%;
transform: translateX(-50%);
height: 50px;
width: 45px;
background: #DB6400;
border: none;
cursor: pointer;
align-items: center;
justify-content: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
&:hover {
    top: -27px;
}
`

const SocialIconsContainer = styled.div`
display: flex;
max-width: 300px;
justify-content: space-around;
margin: 0 auto;
align-item: center;

`

const SocialIcons = styled.div`
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
height: 65px;
width: 55px;
background: #651E3E;
align-items: center;
justify-content: center;
display: flex;
position: relative;
top: 70px;
cursor: pointer;
&:hover {
    background: #DB6400;
}
`

const CopyrightText = styled.p`
color: white;
font-size: 14px;
position: absolute;
bottom: 10px;
left: 50%;
transform: translateX(-50%)
`


function Footer() {

    function toTheTopButton() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }

    function toGithub() { 
        window.open('https://github.com/TrondSpjelkavik');
    }

    function toLinkedin() { 
        window.open('https://www.linkedin.com/in/trond-fuglseth-spjelkavik-80871552/');
    }

    function toFacebook() { 
        window.open('https://www.linkedin.com/in/trond-fuglseth-spjelkavik-80871552/');
    }

    return (
        <FooterContainer>
            <ToTheTop onClick={toTheTopButton}>
                <GoArrowUp className="arrow-icon"></GoArrowUp>
            </ToTheTop>
        <SocialIconsContainer>
        <SocialIcons onClick={toGithub}>
            <FaGithub className="social-icons"></FaGithub>
        </SocialIcons>
        <SocialIcons onClick={toLinkedin}>
            <FaLinkedinIn className="social-icons"></FaLinkedinIn>
        </SocialIcons>
        <SocialIcons onClick={toFacebook}><FaFacebookF className="social-icons"></FaFacebookF></SocialIcons>
        </SocialIconsContainer>
        <CopyrightText>Trond Fuglseth Spjelkavik © 2021</CopyrightText>
        </FooterContainer>
    )
}

export default Footer
