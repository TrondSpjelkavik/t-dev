
import './App.css';
import styled from "styled-components"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


import Home from "./components/main/Home"
import Projects from './components/main/Projects';
import Contact from "./components/main/Contact"




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
padding: 0 40px 0 40px;
font-family: 'Lato', sans-serif;
@media (max-width: 700px) {
    display: none;
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
position: fixed;
align-items: center;
flex-direction: column;
justify-content: space-around;
height: 40px;
width: 60px;
right: 20px;
top: 20px;
cursor: pointer;
z-index: 99;
display: none;
@media (max-width: 700px) {
display: flex;
}
`

const HamburgerLines = styled.div`
position: relative;
width: 45px;
height: 3px;
background: white;
`


function App() {
 
 
  function toAboutMe() {
    setTimeout(() => { window.scrollTo({
      top : 800,
      behavior: "smooth",
    }); }, 500);
    
  }

 

  function openHamburger() {


    const test = document.querySelector(".test")

    const mq = window.matchMedia( "(max-width: 700px)" );
if (mq.matches) {
  test.classList.toggle("hamburger-display")
  test.style.flexDirection = "column";
  test.style.justifyContent = "space-around";
  test.style.height = "100%";
  test.style.width = "100%";
  test.style.zIndex = "98";
  test.style.position = "fixed";
  test.style.padding = "0";
  test.style.top = "0";
  
} 



  }

  function closeHamburger() {
    const test = document.querySelector(".test")
    const mq = window.matchMedia( "(max-width: 700px)" );
    if (mq.matches) {
      test.classList.toggle("hamburger-display")
    }
   
  }

  return (
    <Router>
    <div>
    <Hamburger onClick={openHamburger}>
        <HamburgerLines></HamburgerLines>
        <HamburgerLines></HamburgerLines>
        <HamburgerLines></HamburgerLines>
    </Hamburger>
<NavContainer className="test">
    <NavList><NavLink to="/" onClick={closeHamburger}>Home</NavLink></NavList>
    <NavList>  <NavLink to="/projects" onClick={closeHamburger} activeStyle={{
              textDecoration: "underline #db6400",
              textDecorationThickness: "3px"}}>Projects</NavLink></NavList>
    <NavList onClick={toAboutMe}> <NavLink to="/about" onClick={closeHamburger} activeStyle={{
              textDecoration: "underline #db6400",
              textDecorationThickness: "3px"}}>About me</NavLink></NavList>
    <NavList> <NavLink to="/contact" onClick={closeHamburger} activeStyle={{
              textDecoration: "underline #db6400",
              textDecorationThickness: "3px"}}>Contact</NavLink></NavList>
</NavContainer>

<Switch>
<Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
         
        </Switch>
        
</div>

</Router>

    )
}

export default App;
