import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <div className="proj-container">
        <div className='proj-parent'>
            <div className='proj-row'>
                <div className='proj-head-rw1'>
                    <span className="orange">
                        <i class="fa fa-circle" aria-hidden="true"></i>Shopping HotSpot
                    </span>
                    <div className="edu-year">2020-2021</div>
                </div>
                <div className='desc-rw'>
                    <div className='desc-highlight'>Technology Used : HTML, CSS, JavaScript, SQL, .net, C#, JQuery, AJAX.</div>
                    <div className='desc-curr'>An E-Commerce Website for shopping, with 2 Panels(USER and ADMIN).
                                            Developed client side and server side interfaces to make it interactive.
                    </div>
                </div>
            </div>
            <div className='proj-row'>
                <div className='proj-head-rw2'>
                        <span className="orange">
                            <i class="fa fa-circle" aria-hidden="true"></i>SUDOKU GAME
                        </span>
                        <div className="edu-year">2021-2021</div>
                    </div>
                    <div className='desc-rw'>
                        <div className='desc-highlight'>Technology Used : HTML, CSS, JavaScript.</div>
                        <div className='desc-curr'>Developed 9*9 SUDOKU Game.
                    </div>
                </div>
            </div>
            <div className='proj-row'>
            <div className='proj-head-rw3'>
                        <span className="orange">
                            <i class="fa fa-circle" aria-hidden="true"></i>WEATHER APP
                        </span>
                        <div className="edu-year">2021-2021</div>
                    </div>
                    <div className='desc-rw'>
                        <div className='desc-highlight'>Technology Used : HTML, CSS, JavaScript.</div>
                        <div className='desc-curr'>Developed an app Which gets you the temperature and weather of city
                                                    entered , using open weather api.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
