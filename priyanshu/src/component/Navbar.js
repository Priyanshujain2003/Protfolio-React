import React from 'react'
import "./navbar.css"
import "./responsive.css"

const Navbar = () => {




  return (
    <>
      <div className="nav" id="header">
        <h1 className="top"><span className="logo">P</span>Priyanshu <span>Jain</span></h1>

        <div className="list">
          <ul className="ul">
            <li><a className="active" href="#header-1">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a className="button" href="https://drive.google.com/file/d/17Bn_aexvCCVPwRERxEa4fLYkEaMGpt-t/preview " target="_blank"> Resume</a></li>
          </ul>


          <div className="burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>




        </div>
      </div>



    </>
  )
}

export default Navbar