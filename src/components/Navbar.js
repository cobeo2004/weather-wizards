import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineUser,
  AiFillGithub,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  // State to manage the expansion of the navbar
  const [expand, updateExpanded] = useState(false);
  // State to manage the colour of the navbar when scrolling
  const [navColour, updateNavbar] = useState(false);

  // This function is used to hand the scroll event
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // This function is used to add the event listener
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        {/* Toogle button for responsive design like mobile devices */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        {/* Collapsible Navbar */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* Home Link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* About Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* AI_Model_Integration Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/ai_model_integration"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineProject
                  style={{ marginBottom: "2px" }}
                />{" "}
                AI_Model_Integration
              </Nav.Link>
            </Nav.Item>

            {/* Data Visualization Link */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/data_visualization"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Data Visualization
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;