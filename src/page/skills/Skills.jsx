import React from 'react'
import '../skills/skill.css'
import skill from '../../Images/home2.png'
import SkillsApi from './SkillsApi'

const Skills = () => {

    return (
        <>
            <div className="skill">
                <div className="skillWrapper max-width m-auto ">
                    <div className="skillTitle">
                        <h2 className="title">My Skills</h2>
                    </div>
                    <div className="skillSet d-flex">
                        <div className="skillLeft d-flex">
                            {
                                SkillsApi.map((val)=>{
                                    return(
                                        <div key={val.id} className="skillCard">
                                        <div className="progress">
                                            <div className="outer">
                                                <div className="inner">
                                                    <div className="HTML">
                                                        {val.percent}%
                                                    </div>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                <defs>
                                                    <linearGradient id="GradientColor">
                                                        <stop offset="0%" stop-color="#e91e63" />
                                                        <stop offset="100%" stop-color="#673ab7" />
                                                    </linearGradient>
                                                </defs>
                                                <circle cx="80" cy="80" r="70" stroke-linecap="round" className={val.className}/>
                                            </svg>
                                        </div>                            
                                        <div className="skillName">{val.name}</div>
                                        </div>
                                    )
                                })
                            }                                                      
                        </div> 
                        <div className="skillRight d-flex">                          
                            <div className="skillInfo">
                                I have well versed knowledge in these languages. I am very passionate about building creative,flexible and resposive websites.
                                </div>
                            <img src={skill} alt="skill" className="skillRightImg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
