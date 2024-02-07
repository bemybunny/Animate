import React from 'react'
import domi_img1 from '../assets/picture/domi_img1.png';
import pizz from '../assets/picture/pizz.png';
import './mobpage4.css'


const MobilePage4 = () => {
  return (
    <div className="mob4_cnt">
      <div className="mob4_image">
        <img className="domi_img1" src={domi_img1} alt=""/>
        <img className="pizz" src={pizz} alt=""/>
      </div>
      <div className="mob4_heading">
        <h1>ABC 4</h1>
        <span>This is sample text for ABC 2</span>
        <div>
            <span>VIEW CASE STUDY-</span>
            <button className="mob4_btn">Coming Soon</button>
        </div>
      </div>
    </div>
  )
}

export default MobilePage4