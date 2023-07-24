import React from 'react'
import "./contact.css"
import "./responsive.css"
import axios from "axios"
import { useState } from 'react'


const Contact = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone_number, setphone_number] = useState("");
    const [text, settext] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: name,
            email: email,
            phone_number: phone_number,
            text: text
        }

// for backend connect

        // const res = await axios.post("http://localhost:8800" , data);
        // console.log("res", res)

        const res = await axios.post("http://localhost:8800", data).then((res) => {
            alert(res.data.message);
        });

    }

    return (

        <>
            <div className="contact" id="contact">
                <div className="contact-2">
                    <div className="form-button">
                        <button type="button" className="icon-2"><img className="edu" src="./image/Call Chat.png" />
                            <p className="p1">Contact Me</p>
                        </button>
                    </div>
                    <div className="form-1">
                        <form onSubmit={onSubmit}>
                            <div className="name">
                                <label>Your Name :</label><br />
                                <input type="text" placeholder="Enter Your Name"
                                    required
                                    onChange={(event) => setname(event.target.value)}
                                />
                            </div>
                            <div className="name">
                                <label>Your Email Id :</label><br />
                                <input type="text" placeholder="Enter Your email"
                                    required
                                    onChange={(event) => setemail(event.target.value)}
                                />
                            </div>
                            <div className="name">
                                <label>Your Phone Number :</label><br />
                                <input type="number" placeholder="Enter Your Phone Number"
                                    required
                                    onChange={(event) => setphone_number(event.target.value)}
                                />
                            </div>
                            <div className="name">
                                <label>Your Text</label><br />
                                <textarea placeholder="Your Meassge" required onChange={(event) => settext(event.target.value)}></textarea>
                            </div>

                            <input className="sub" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact