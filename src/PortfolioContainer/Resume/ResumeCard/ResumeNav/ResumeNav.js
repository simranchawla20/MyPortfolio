import React from 'react'
import { Link } from 'react-scroll';
import './ResumeNav.css'

export default function ResumeNav() {
  return (
    <div className='nav-container'>
      <div className='icons'>
        <i class="fa fa-graduation-cap"></i>
        <i class='fa fa-rotate-left'></i>
        <i class='fa fa-code'></i>
        <i class="fa fa-bar-chart"></i>
        <i class="fa fa-arrows"></i>  
      </div>
      <nav className='sidenav'>
        <ul>
          <div className='li-div1'>
          <li>
            <Link activeClass="active" smooth spy to="home">
              EDUCATION
            </Link>
          </li>
          </div>
          <div className='li-div2'>
          <li>
            <Link activeClass="active" smooth spy to="about">
              WORK HISTORY
            </Link>
          </li>
          </div>
          <div className='li-div3'>
          <li>
            <Link activeClass="active" smooth spy to="resume">
              SKILLS
            </Link>
          </li>
          </div>
          <div className='li-div4'>
          <li>
            <Link activeClass="active" smooth spy to="testimonial">
              PROJECTS
            </Link>
          </li>
          </div>
          <div className='li-div5'>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              INTERESTS
            </Link>
          </li>
          </div>
          
        </ul>
      </nav>

    </div>
  )
}
