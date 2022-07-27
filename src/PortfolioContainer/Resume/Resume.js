import React from 'react'
import ResumeNav from './ResumeCard/ResumeNav/ResumeNav'
import './Resume.css'

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
                <div className='resume-details'>details</div>
            </div>

        </div>
    </div>
  )
}
