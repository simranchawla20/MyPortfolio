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
            <div className="side-link-div">
              <Link activeClass="active" smooth={true} spy={true} to="">
              EDUCATION
            </Link>
            </div>
          </li>
          </div>
          <div className='li-div2'>
          <li>
          <div className="side-link-div">
            <Link activeClass="active" smooth={true} spy={true} to="">
              WORK HISTORY
            </Link>
            </div>
          </li>
          </div>
          <div className='li-div3'>
          <li>
          <div className="side-link-div">
            <Link activeClass="active" smooth={true} spy={true} to="">
              SKILLS
            </Link>
            </div>
          </li>
          </div>
          <div className='li-div4'>
          <li>
          <div className="side-link-div">
            <Link activeClass="active" smooth={true} spy={true} to="testimonial">
              PROJECTS
            </Link>
            </div>
          </li>
          </div>
          <div className='li-div5'>
          <li>
          <div className="side-link-div">
            <Link activeClass="active" smooth={true} spy={true} to="contact">
              INTERESTS
            </Link>
            </div>
          </li>
          </div>
          
        </ul>
      </nav>

    </div>
  )
}
