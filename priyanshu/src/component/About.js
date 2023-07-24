import React from 'react'
import "./about.css"
import "./responsive.css"
import Typed from 'react-typed';

const About = () => {
    return (

        <>
            <div id="about">
                {/* content */}
                <div className="about-image">
                    <img className="img-1" src="./image/PRIYANSHU1.jpeg" />
                </div>

                {/* image content */}
                <div className="image-content">
                    {/* <heading */}
                    <div className="header-2">
                        <div id="one">
                            <p>About</p>
                            <div id="two">
                                <p>Me</p>
                            </div>
                        </div>
                    </div>

                    {/* react-typed */}
                    <h3>

                        <Typed
                            strings={["Mern Stack Developer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "Graphic Designer"]}
                            typeSpeed={80}
                            backSpeed={55}
                            backdelay={1000}
                            loop={true}
                        />
                    </h3>
                    {/*  */}

                    <h4>Hi, I am <b>Priyanshu</b>, and i am a student of MCA (AI-DS)
                        in Poornima University Jaipur.till now in my MCA Course i have
                        learn multiple Software and languages like DSA , JAVA , Web Technology.
                        But my core Interest is filed of Web Technology. i am an avid learner, continuously seeking
                        opportunities to enhance my knowledge and stay up-to-date with the latest industry trends..<br /> i am
                        a <span>MERN Stack Developer</span>
                        and i have expertise with programming language like c , java , and i have worked on web development
                        project using HTML, CSS, JavaScript, Bootstrap, Node.js, React.js, MongoDB and Mysql.
                        i am passionate about creating functional and user-friendly applications.
                    </h4>

                    <div className="social-2">
                        <button type="button" className="icon"><i
                            className="fa-solid fa-envelope fa-shake"></i>hellopriyanshu2003@gmail.com</button>
                        <button type="button" className="icon"><i className="fa-solid fa-location-dot fa-shake"></i>Jaipur</button>
                    </div>
                </div>

            </div>

        </>

    )
}

export default About