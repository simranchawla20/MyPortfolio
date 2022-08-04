import React from 'react'
import ResumeNav from './ResumeCard/ResumeNav/ResumeNav'
import './Resume.css'
import Education from './ResumeCard/ResumeDetailsComp/Education'
import WorkHistory from './ResumeCard/ResumeDetailsComp/WorkHistory'
import ProgrammingSkills from './ResumeCard/ResumeDetailsComp/ProgrammingSkills'
import Projects from "./ResumeCard/ResumeDetailsComp/Projects"
import Interests from "./ResumeCard/ResumeDetailsComp/Interests"

export default function Resume() {
  return (
    <div className='resume-container'>
        <div className='resume-parent'>
            <div className='heading-container'>
            <div className='screen-heading'>
                <span>Resume</span>
            </div>
            <div className='screen-sub-heading'>
                <span>My Formal Bio Details</span>
            </div>
            <div className='heading-separater'>
                <div className='separater-line'></div>
                <div className='separater-blob'>
                <div></div>
                </div>
            </div>
            </div>
            <div className='resume-card'>
                <div className='resume-nav'><ResumeNav/></div>
                <div className='resume-details'>
                    <section id="edu"><Education/></section>
                    <section id="work"><WorkHistory/></section>
                    <section id="skills"><ProgrammingSkills/></section>
                    <section id="skills"><Projects/></section>
                    <section id="skills"><Interests/></section>
                    

                    {/* <Education/>
                    <WorkHistory/>
                    <ProgrammingSkills/> */}
                </div>
            </div>

        </div>
    </div>
  )
}
