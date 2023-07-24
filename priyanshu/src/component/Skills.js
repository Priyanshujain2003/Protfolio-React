import React from 'react'
import "./skills.css"
import "./responsive.css"

const Skills = () => {
    return (
        <>

            <div className="skills" id="skills">

                <div className="section-1">
                    <button type="button" className="icon-1"><img className="edu" src="./image/coding.png" />
                        <p className="p1">Skills</p>
                    </button>

                    <div className="progress">

                        <div className="app">Frontend</div>
                        <div className="app-1 ">
                            <div className="bar-frontend percent">85%</div>
                        </div>

                        <div className="app">Backend</div>
                        <div className="app-1 ">
                            <div className="bar-backend percent">70%</div>
                        </div>

                        <div className="app">Database</div>
                        <div className="app-1 ">
                            <div className="bar-database percent">75%</div>
                        </div>

                        <div className="app">Graphic Design</div>
                        <div className="app-1 ">
                            <div className="bar-photoshop percent">70%</div>
                        </div>

                    </div>

                </div>


                <div className="section-2">
                    <div className="skill-image">

                        <button type="button" className="icon-1">
                            <p className="p1">Frontend Software</p>
                        </button>
                        <div className="jain">
                            <img className="skill-image-1" src="./image/html.png" />
                            <img className="skill-image-1" src="./image/css.png" />
                            <img className="skill-image-1" src="./image/js.png" />
                            <img className="skill-image-1" src="./image/bootstrap.png" />
                            <img className="skill-image-1" src="./image/reactjs.png" />
                        </div>

                        <button type="button" className="icon-1">
                            <p className="p1">Backend Software</p>
                        </button>
                        <div className="jain">
                            <img className="skill-image-1" src="./image/nodejslogo.png" />
                            <img className="skill-image-1" src="./image/phplogo.png" />
                            <img className="skill-image-1" src="./image/mongo-dblogo.png" />
                            <img className="skill-image-1" src="./image/sqllogo.png" />
                        </div>


                        <button type="button" className="icon-1">
                            <p className="p1">Other Skills</p>
                        </button>
                        <div className="jain">
                            <img className="skill-image-1" src="./image/photoshop.png" />
                            <img className="skill-image-1" src="./image/c.png" />
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Skills