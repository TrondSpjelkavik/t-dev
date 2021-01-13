
import './App.css';
import styled from "styled-components"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
padding: 0 20px 0 30px;
font-family: 'Lato', sans-serif;
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
      top : 900,
      behavior: "smooth",
    }); }, 500);
    
  }

  return (
    <Router>
    <div>
    <Hamburger>
        <HamburgerLines></HamburgerLines>
        <HamburgerLines></HamburgerLines>
        <HamburgerLines></HamburgerLines>
    </Hamburger>
<NavContainer>
    <NavList><Link  to="/">Home</Link></NavList>
    <NavList>  <Link to="/projects">Projects</Link></NavList>
    <NavList onClick={toAboutMe}> <Link to="/about">About me</Link></NavList>
    <NavList> <Link to="/contact">Contact</Link></NavList>
</NavContainer>
<Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
</div>
</Router>

    )
}

export default App;
