import React from 'react'
import trainer from '../assets/picture/trainer.png';
import fitness from '../assets/picture/fitness.png';
import './mobpage1.css'
const MobilePage1 = () => {
  return (
    <div className="mob1_cnt">
      <div className="mob1_image">
        <img className="trainer" src={trainer} alt=""/>
        <img className="fitness" src={fitness} alt=""/>
      </div>
      <div className="mob1_heading">
        <h1>ABC 2</h1>
        <span>This is sample text for ABC 2</span>
        <div>
            <span>CASE STUDY-</span>
            <button className="mob1_btn">Coming Soon</button>
        </div>
      </div>
    </div>
  )
}

export default MobilePage1
