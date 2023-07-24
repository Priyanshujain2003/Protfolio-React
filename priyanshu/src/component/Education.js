import React from 'react'
import "./education.css"
import "./responsive.css"


const Education = () => {
    return (

        <>
        <div className="education-skills" id="Education">

<div className="Education">
    <button type="button" className="icon-1"><img className="edu" src="./image/book.png" />
        <p className="p1">Education</p>
    </button>

    <div className="class-1">
        <p className="mark"><i className="fa-solid fa-arrows-turn-right"></i>2022 - 2024</p>
        <p className="mark-1">Poornima University , Jaipur</p>
        <p className="mark-1">Pursuing Master Of Computer Application (MCA)</p>
        <p className="mark-1">Artificial Intelligence and Data Science (AI-DS)</p>
    </div>

    <div className="class-1">
        <p className="mark"><i className="fa-solid fa-arrows-turn-right"></i>2019 - 2022</p>
        <p className="mark-1">S.S.Jain Subodh PG College , Jaipur</p>
        <p className="mark-1">Bachelor Of Computer Application (BCA)</p>
    </div>

    <div className="class-1">
        <p className="mark"><i className="fa-solid fa-arrows-turn-right"></i>2018</p>
        <p className="mark-1">Science Campus , Mandawar</p>
        <p className="mark-1">Senior Secondary From RBSE</p>
    </div>

</div>

<div className="certificate">
    <button type="button" className="icon-1"><img className="edu" src="./image/certificate.png" />
        <p className="p1">Certificate</p>
    </button>

    <div className="class-1">
        <p className="mark"><i className="fa-solid fa-arrows-turn-right"></i>MERN Stack Development Internship Program .
        </p>
        <p className="mark-1">REGex Software (Jaipur)</p>
        <p className="mark-1">May 2023 - GoingOn</p>
    </div>

    <div className="class-1">
        <p className="mark"><i className="fa-solid fa-arrows-turn-right"></i>Advanced Diploma in Multimedia Training
            Program .</p>
        <p className="mark-1">TGC Animation & Multimedia (Jaipur)</p>
        <p className="mark-1">2021-2022</p>
    </div>

    <div className="class-1">
        <p className="mark"><i className="fa-solid fa-arrows-turn-right"></i>RS-CIT (Rajasthan State Certificate of
            Information Technology)</p>
        <p className="mark-1"><i className="fa-solid fa-arrows-turn-right"></i>Course Completion Certificate of C
            Programming By Udemy</p>
    </div>
</div>
</div>
        </>

    )
}

export default Education