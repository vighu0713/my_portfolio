import React from 'react'
import '../about/about.css'
import about_img from '../../Images/about1.png'
const About = () => {
    return (
        <>
            <div className="about ">
                <div className="aboutWrapper max-width m-auto">
                    <div className="aboutTitle">
                        <h3 className="Title">About Me</h3>
                    </div>
                    <div className="aboutInfo">
                        <div className="aboutRight d-flex">
                            <img src={about_img} alt="about" className="aboutRightImg" />
                        </div>
                        <div className="aboutLeft">
                       <p className="info">Hello i am Vignesh S Mogaveera studying computer science engineering from M S Ramaiah University of Applied Sciences Bangalore. I am in final year of my engineering and i am looking forward to start my career by gaining a descent job, where i can apply my knowledge.</p>
                      <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1X_lLIhVKEOFHq2hzbxl5zVZ6hPd_mjcO/view?usp=sharing"><button className="btn">View Resume</button></a> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
