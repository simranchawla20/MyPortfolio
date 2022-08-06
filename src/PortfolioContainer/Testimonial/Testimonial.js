import React from 'react'
import './Testimonial.css'
import Diamond from '../../assets/Home/shape-bg.png';
import Slider from "../Testimonial/Slider"

export default function Testimonial() {
  return (
    <div className='test-container'>
        <div className='testparent'>
            <div className='heading-container'>
                <div className='screen-heading'>
                    <span>Testimonial</span>
                </div>
                <div className='screen-sub-heading'>
                    <span>What my people say about me</span>
                </div>
                <div className='heading-separater'>
                    <div className='separater-line'></div>
                    <div className='separater-blob'>
                    <div></div>
                    </div>
                </div>
            </div>
            <div className='slider-container'>
                <div className='slider-parent'>
                    <Slider/>
                </div>
                <div className='footer-container'>
                    <div className='footer-parent'>
                        <img src={Diamond} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
