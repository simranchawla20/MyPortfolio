import React from 'react'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href="https://www.linkedin.com/in/simrann20/">
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href="https://github.com/simranchawla20">
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a href="https://www.instagram.com/simranchawla_20/">
                        <i className='fa fa-instagram'></i>
                    </a>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Simranjeet Kaur</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            
                        </h1>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
