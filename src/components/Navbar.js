import React, { Component } from "react";
import { FaBeer,FaGit,FaTwitter, FaYoutube } from "react-icons/fa";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div id="nav-logo-section" className="nav-section">
            <a href="#">
              <FaBeer />
            </a>
          </div>
          <div id="nav-link-section" className="nav-section">
          <a href="#">ABOUT</a>
          <a href="#">WORK</a>
          </div>
          <div id="nav-social-section" className="nav-section">
          <a href="#"> <FaTwitter /> </a>
          <a href="#"> <FaYoutube /> </a>
          <a href="#"> <FaGit/> </a>
          </div>
          <div id="nav-contact-section" className="nav-section">
          <a href="#">GET IN TOUCH</a>

          </div>
        </nav>
      </div>
    );
  }
}
