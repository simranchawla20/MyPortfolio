import React from 'react'
import './WorkHistory.css'

export default function WorkHistory() {
  return (
    <div className='work-container'>
        <div className='work-parent'>
            <div className='head-rw'>
                <span className="orange">
                    <i class="fa fa-circle" aria-hidden="true"></i> Origo Commodities India Pvt. Ltd. , Gurugram
                </span>
                <div className="edu-year">2022-Present</div>
            </div>
            <div className='desc-rw'>
                <div className='desc-highlight'>FULL STACK DEVELOPER INTERN</div>
                <div className='desc-curr'>Currently Working on React JS, Java, Flutter, SQL, Database, SpringBoot, Web Dev</div>
                <div className='desc-points'>
                    <i class="fa fa-circle blck-bullet" aria-hidden="true"></i>Performed complete localization to one of the Origo Live Apps in <br></br>&ensp;&nbsp;&nbsp;Flutter.<br></br>
                    <i class="fa fa-circle blck-bullet" aria-hidden="true"></i>Build Api's for Another Live App using SpringBoot.<br></br>
                    <i class="fa fa-circle blck-bullet" aria-hidden="true"></i>Worked on the UI of one of the Apps to look better, in Flutter.<br></br>
                    <i class="fa fa-circle blck-bullet" aria-hidden="true"></i>Working as a React Developer, Handling whole Origo E-Mandi live &ensp;&nbsp;&nbsp;&nbsp;&nbsp;website.
                </div>
            </div>
        </div>
    </div>
  )
}
