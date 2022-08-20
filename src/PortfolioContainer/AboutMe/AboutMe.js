import React from 'react'
import './AboutMe.css'
import { Link } from 'react-scroll';

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
        <div className='about-card'>
          <div className='about-profile'></div>
          <div className='about-details'>
            <span class="about-me-description">Full stack web developer with 
            background knowledge of MERN stack, along with a knack of 
            building User Interace with Flutter .Have an Experience of building Rest API's using SpringBoot technology
             with utmost efficiency. Strong SQL knowledge with database handling.
            Willing to be an asset for an organization.</span>
            <div class="about-me-highlights">
              <div class="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Full Stack web development</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Interactive Front End as per the design</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>React</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Flutter</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Building REST API</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Managing database</span>
              </div>
            </div>
            <div class="about-me-options">
              <button class="btn primary-btn">
                <Link activeClass="active" smooth spy to="contact">
                  Hire Me
                </Link></button>
              <a href="Simran_Resume.pdf" download="Ehiedu Ehizcv.pdf">
                <button class="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
