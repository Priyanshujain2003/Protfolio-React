import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Education from "./component/Education"
import Skills from "./component/Skills"
import Project from "./component/Project"
import Contact from "./component/Contact"
import Footer from "./component/Footer"

const App = () => {
    return (

        <>
            <Navbar />
            < Home />
            <About />
            <Education />
            <Skills />
            <Project />
            <Contact />
            <Footer />
            
        </>
    )
}

export default App