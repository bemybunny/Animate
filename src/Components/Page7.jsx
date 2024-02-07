import React, { useRef } from 'react'
import store from '../assets/picture/store.png'
import world from '../assets/picture/world.png'
import './page7.css'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';


const Page7 = () => {
  const { ref, inView } = useInView();

    return (
        <div  className="container">
          <div className="page7_cnt">
          <div className="svgspan">
            <span>Developing ERP Solution for</span>
            <h1>Text Headline</h1>
            <span className="spanright">in future industry</span>
          </div>
            <div className="svg7">
                <svg version="1.1" id="transring" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 414 414"
              style={{ enableBackground: 'new 0 0 414 414', backgroundColor: 'transparent'}}>
              <path id="Transparent_Ring" className="transrg"
                style={{ opacity: 0.2, fill: 'none', stroke: '#FFFFFF', strokeWidth: 5, strokeMiterlimit: 10, enableBackground: 'new' }}
                d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"></path>
                {inView && (<path id="Opaque_Ring" className="transrgwht7" strokeDasharray="0,1000"
                style={{opacity:1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10, strokeDasharray: '670, 1000' }}
                d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"></path>)}
              <g id="Dots1" className="dots-nav">
                <g>
                  <path className="dotsst dotsfill1" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"></path>
                </g>
                <g>
                  <path className="dotsstro1" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"></path>
                </g>
              </g>
              <g id="Dots2" className="dots-nav">
                <g>
                  <path className="dotsst dotsfill2" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"></path>
                </g>
                <g>
                  <path className="dotsstro2" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"></path>
                </g>
              </g>
              <g id="Dots3" className="dots-nav">
                  <g>
                    <path className="dotsst dotsfill3" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"></path>
                  </g>
                  <g>
                    <path className="dotsstro3" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"></path>
                  </g>
              </g>
              <g id="Dots4" className="dots-nav">
            <g>
              <path className="dotsst dotsfill4" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"></path>
            </g>
            <g>
              <path className="dotsstro4" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"></path>
            </g>
            </g>
            <g id="Dots5" className="dots-nav">
              <g>
                <path className="dotsst dotsfill5" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"></path>
              </g>
              <g>
                <path className="dotsstro5" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"></path>
              </g>
            </g>
              <g id="Dots6" className="dots-nav">
              <g>
                <path className="dotsst dotsfill6" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"></path>
              </g>
              <g>
                <path className="dotsstro6" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"></path>
              </g>
            </g>
            <g id="Dots7" className="dots-nav">
              <g>
                <path className="dotsst dotsfill7" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"></path>
              </g>
              <g>
                <path className="dotsstro7" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"></path>
              </g>
            </g>
                </svg>
            </div>
         
            <div className="flex-end">
              <div className="flex-endImage">
                  <img src={world} alt=""/>
              </div>
              <div className="flex-endcol">
                <h1>ABC 23478</h1>
                <span>We are the best</span>
                <span>web development company</span>
                <span>In the world</span>
              </div>
            </div>
          </div>
          <div ref={ref} className="animatepage7">
        {inView && (
          <motion.div
            initial={{ y: 400 ,opacity:0}}
            animate={{ y: 0,opacity:1}}
            transition={{duration:1,delay:0.1}}
            className="animatepageimg71"
          >
            <img src={store} alt="dress" />
          </motion.div>
        )}
      </div>
        </div>
      )
}

export default Page7
