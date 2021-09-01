import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram,faTelegram, } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import socialMedia from '../../Images/social-media.png'
// import Typist from "react-typist";
import { NavLink } from "react-router-dom";


const Home = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
            setCount(1);
          }, [count]);
    return (
        <>
            <section className="home d-flex" id="home">

                <div className="home-content max-width ">
                    <div className="text-1">Hey there! 👋</div>
                    <div className="text-2">I'm <span> Vignesh S Mogaveera</span></div>
                    <div className="text-3">Let me introduce<span> myself </span></div>
                        {/* {
                        count ? (
                            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                              <span> Student</span>
                              <Typist.Backspace count={60} delay={80} Backspace={60} />
                              <span> Web Developer</span>
                              <Typist.Backspace count={60} delay={80} Backspace={60} />

                            </Typist>
                          ) : (
                            ""
                          )
                        } */}
                   
                  <NavLink to="/about"><button type='button' className="btn-hire">About me<FontAwesomeIcon className="arrow" icon={faAngleRight}/></button></NavLink>
                </div>
                <div className="social-media d-flex">
                    <div className="social-media-svg">
                        <img src={socialMedia} alt="social-media-img" />
                    </div>
                    <div className="social-media-icons d-flex">
                        <div className="Linkedin">
                            <a href="https://www.linkedin.com/in/vignesh-m-644055204"><FontAwesomeIcon icon={faLinkedinIn} /> </a>
                        </div>
                        <div className="Telegram">
                            <a href="https://t.me/Vighu_07"><FontAwesomeIcon icon={faTelegram} /> </a>
                        </div>
                        <div className="Instagram">
                            <a href="https://www.instagram.com/vignesh_0713"><FontAwesomeIcon icon={faInstagram} /> </a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home
