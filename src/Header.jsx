import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Outlet, Link, NavLink } from "react-router-dom";
import React from "react";
import "./header.css";
import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";
import logo from "./components/images/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { Button } from "react-bootstrap
import { PersonAdd, AccountCircle } from "@mui/icons-material";
import Vision from "./pages/Vision/Vision";
import Mission from "./components/Mission/Mission";
import ExplorePlaces from "./components/ExplorePlaces/ExplorePlaces";
import Support24x7 from "./components/support/Support";
import AboutUs from "./components/AboutUs/AboutUs";
import { HomeOutlined } from "@mui/icons-material";
import SignUp from "./pages/auth/SignUp";
import Faq from "./components/Faq/Faq";
import ContactUs from "./components/ContactUs.jsx/ContactUs";
const Header = () => {
  return (
    <>
      <div className="heading">
        <h1>Holistic Harbor</h1>
      </div>
      <div className="sub-head">
        <h2>Know your Religious place here</h2>
      </div>

      <div className="auth-buttons">
        <Link to="/signup">
          {/* Use MUI icons for the sign-up button */}
          <Button variant="outlined" startIcon={<PersonAdd />}>
            Sign Up
          </Button>
        </Link>
        <Link to="/login">
          {/* Use MUI icons for the login button */}
          <Button variant="outlined" startIcon={<AccountCircle />}>
            Login
          </Button>
        </Link>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="components">
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="HOME"
          className="nav-dropdown-title Home"
          menuVariant="dark"
        >
          <NavDropdown.Item as={Link} to="/vision">
            Vision style={{ textDecoration: "none" }}
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/mission">
            Mission
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/contact-us">
            Contact Us
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/about-us">
            About Us
          </NavDropdown.Item>

          <NavDropdown.Item as={Link} to="/support-24x7">
            Support 24x7
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          id="nav-dropdown-dark-example"
          title="EXPLORE PLACES"
          className="nav-dropdown-title Explore-Places"
          style={{ textDecoration: "none" }}
          menuVariant="dark"
        >
          <NavDropdown.Item href="#hindu-temples">
            Hindu Temples
          </NavDropdown.Item>
          <NavDropdown.Item href="#mosques">Mosques</NavDropdown.Item>
          <NavDropdown.Item href="#gurudwaras">Gurudwaras</NavDropdown.Item>
          <NavDropdown.Item href="#churches">Churches</NavDropdown.Item>

          <NavDropdown.Item href="#budha-temple">Budha Temple</NavDropdown.Item>
          <NavDropdown.Item href="#jain-temple">Jain Temple</NavDropdown.Item>
          <NavDropdown.Item href="#zorostrian-temple">
            Zorostrian Temple
          </NavDropdown.Item>
          <NavDropdown.Item href="#christian-temple">
            Christian Temple
          </NavDropdown.Item>
          <NavDropdown.Item href="#judaism-temple">
            Judaism Temple
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          id="nav-dropdown-dark-example"
          title="FORUMS"
          className="nav-dropdown-title Forums"
          style={{ textDecoration: "none" }}
          menuVariant="dark"
        >
          <NavDropdown.Item href="#religious-news">
            Religious News
          </NavDropdown.Item>
          <NavDropdown.Item href="#pilgrimages-experience">
            Pilgrimages Experience
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Events"
          className="nav-dropdown-title
          Events"
          style={{ textDecoration: "none" }}
          menuVariant="dark"
        >
          <NavDropdown.Item href="#hindus-events">
            Hindus Events
          </NavDropdown.Item>
          <NavDropdown.Item href="#jews-events">Jews Events</NavDropdown.Item>
          <NavDropdown.Item href="#parsi-events">Parsi Events</NavDropdown.Item>
          <NavDropdown.Item href="#religious-travelling">
            Religious Travelling
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link
          as={NavLink}
          to="/articles"
          className="nav-dropdown-title FAQ"
        >
          ARTICLES
        </Nav.Link>
        <Nav.Link as={NavLink} to="/FAQ" className="nav-dropdown-title FAQ">
          FAQ
        </Nav.Link>
      </div>
    </>
  );
};

export default Header;
