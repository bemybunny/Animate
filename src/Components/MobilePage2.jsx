import React from 'react'
import domi_img1 from '../assets/picture/domi_img1.png';
import pizz from '../assets/picture/pizz.png';
import offer from '../assets/picture/offer.png';
import './mobpage2.css'
const MobilePage2 = () => {
  return (
    <div className="mob2_cnt">
      <div className="mob2_image">
        <img className="domi_img1" src={domi_img1} alt=""/>
        <img className="pizz" src={pizz} alt=""/>
      </div>
      <div className="mob2_heading">
        <h1>ABC 3</h1>
        <span>This is sample text for ABC 2</span>
        <div>
            <span>VIEW CASE STUDY-</span>
            {/* <button className="mob2_btn">Coming Soon</button> */}
        </div>
      </div>
    </div>
  )
}

export default MobilePage2