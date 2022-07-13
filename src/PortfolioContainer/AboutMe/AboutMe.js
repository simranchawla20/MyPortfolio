import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className='about-container'>
      <div className='about-parent'>
        <div className='heading-container'>
          <div className='screen-heading'>
            <span>About Me</span>
          </div>
          <div className='screen-sub-heading'>
            <span>Why Choose Me?</span>
          </div>
          <div className='heading-separater'>
            <div className='separater-line'></div>
            <div className='separater-blob'>
              <div></div>
            </div>
          </div>
        </div>
        <div className='about-card'></div>
      </div>
    </div>
  )
}
