import React from 'react';
import pizz from '../assets/picture/pizz.png';
import pizza_box from '../assets/picture/pizza_box.png';
import domi_img1 from '../assets/picture/domi_img1.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './page2.css';

const Page2 = () => {
  const { ref, inView } = useInView();

  return (
    <div className="container" ref={ref}>
      <div className="page2_cnt">
        <div className="svgspan">
          <span>Redefining</span>
          <h1>UX Strategy</h1>
          <span className="spanright">and UI design</span>
        </div>
        <div className="svgbox2">
        <svg version="1.1" id="transring" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 414 414"
          style={{ enableBackground: 'new 0 0 414 414', backgroundColor: 'transparent' }}>
          <path id="Transparent_Ring" className="transrg"
            style={{ opacity: 0.2, fill: 'none', stroke: 'white', strokeWidth: 5, strokeMiterlimit: 10, enableBackground: 'new' }}
            d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"></path>
         {inView && (  <path id="Opaque_Ring" className="transrgwht2" strokeDasharray="0,1000"
            style={{  opacity: 1,fill: 'none', stroke: 'white', strokeWidth: 2, strokeMiterlimit: 10, strokeDasharray: '10, 1000' }}
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
                <path className="dotsst dotsfill3" style={{ fill: 'white', opacity: 1 }} d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"></path>
              </g>
              <g>
                <path className="dotsstro3" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"></path>
              </g>
          </g>
          <g id="Dots4" className="dots-nav">
        <g>
          <path className="dotsst dotsfill4" style={{ fill: 'white', opacity: 1 }} d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"></path>
        </g>
        <g>
          <path className="dotsstro4" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"></path>
        </g>
         </g>
        <g id="Dots5" className="dots-nav">
          <g>
            <path className="dotsst dotsfill5" style={{ fill: 'white', opacity: 1 }} d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"></path>
          </g>
          <g>
            <path className="dotsstro5" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"></path>
          </g>
        </g>
          <g id="Dots6" className="dots-nav">
          <g>
            <path className="dotsst dotsfill6" style={{ fill: 'white', opacity: 1 }} d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"></path>
          </g>
          <g>
            <path className="dotsstro6" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"></path>
          </g>
        </g>
        <g id="Dots7" className="dots-nav">
          <g>
            <path className="dotsst dotsfill7" style={{ fill: 'white', opacity: 1 }} d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"></path>
          </g>
          <g>
            <path className="dotsstro7" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"></path>
          </g>
        </g>
      </svg>
        </div>
      
        <div className="flex-end">
          <div className="flex-endcol">
            <h1>ABC 23478</h1>
            <span>We are the best</span>
            <span>web development company</span>
            <span>In the world</span>
          </div>
        </div>
      </div>
      {inView && (
        <div className="animatepage2">
          <motion.div
            initial={{ y: 100,opacity:0 }}
            animate={{ y: 0,opacity:1 }}
            transition={{duration:0.4,delay:0.2}}
            className="animatepageimg21"
          >
            <img src={domi_img1} alt="domi_img1" />
          </motion.div>
          <motion.div
            initial={{ y: -100,opacity:0 }}
            animate={{ y: 0 ,opacity:1}}
            transition={{duration:0.6,delay:0.2}}
            className="animateimage22"
          >
            <img src={pizza_box} alt="pizza_box" />
          </motion.div>
          <motion.div
            initial={{ y: 100,opacity:0 }}
            animate={{ y: 0,opacity:1 }}
            transition={{duration:0.3,delay:0.2}}
            className="animateimage23"
          >
            <img src={pizz} alt="pizz" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Page2;
