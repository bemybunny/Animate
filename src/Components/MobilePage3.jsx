import React from 'react'
import domi_img1 from '../assets/picture/domi_img1.png';
import pizz from '../assets/picture/pizz.png';
import './mobilepage3.css'
const MobilePage3 = () => {
  return (
    <div className="mob3_cnt">
      <div className="mob3_image">
        <img className="domi_img1" src={domi_img1} alt=""/>
        <img className="pizz" src={pizz} alt=""/>
      </div>
      <div className="mob3_heading">
        <h1>ABC 4</h1>
        <span>This is sample text for ABC 2</span>
        <div>
            <span>VIEW CASE STUDY-</span>
            <button className="mob3_btn">Coming Soon</button>
        </div>
      </div>
    </div>
  )
}

export default MobilePage3