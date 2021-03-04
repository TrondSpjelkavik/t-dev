import React from 'react'


import styled from "styled-components"




const NavContainer = styled.nav`
position: absolute;
top: 30px;
right: 0;
width: 600px;
height: 70px;
background: #051E3E;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px 0 30px;
font-family: 'Roboto', sans-serif;
@media (max-width: 700px) {
    position: absolute;
    right: 800px;
}
`;

const NavList = styled.li`
color: white;
font-size: 20px;
list-style: none;
align-items: center;
z-index: 99;
cursor: pointer;
&:hover {
    text-decoration: underline #DB6400;
}

`

const Hamburger = styled.div`
position: absolute;
align-items: center;
flex-direction: column;
justify-content: space-around;
height: 40px;
width: 60px;
right: 20px;
top: 20px;

z-index: 99;
display: none;
@media (max-width: 700px) {
    z-index: 99;
display: flex;
}
`

const HamburgerLines = styled.div`
position: relative;
width: 45px;
height: 3px;
background: white;
z-index: 99;
`




function Nav() {


   
    return (
        
        <div>
            <Hamburger onClick={handleClick}>
                <HamburgerLines></HamburgerLines>
                <HamburgerLines></HamburgerLines>
                <HamburgerLines></HamburgerLines>
            </Hamburger>
        <NavContainer>
            <NavList>Home</NavList>
            <NavList>Projects</NavList>
            <NavList>About me</NavList>
            <NavList>Contact</NavList>
        </NavContainer>
     
        </div>
        
    )
}

export default Nav
