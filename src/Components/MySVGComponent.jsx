import React from 'react';

const MySVGComponent = () => (
  <svg version="1.1" id="transring" xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 414 414"
    style={{ enableBackground: 'new 0 0 414 414', backgroundColor: 'green' }}>
    <path id="Transparent_Ring" className="transrg"
      style={{ opacity: 0.4, fill: 'none', stroke: '#FFFFFF', strokeWidth: 2, strokeMiterlimit: 10, enableBackground: 'new' }}
      d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"></path>
   <path id="Opaque_Ring" className="transrgwht" strokeDasharray="0,1000"
      style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10, strokeDasharray: '10, 1000' }}
      d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"></path>
        <g id="Dots4" className="dots-nav">
            <g>
                <path className="dotsst dotsfill4" style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }} d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"></path>
            </g>
            <g>
                <path className="dotsstro4" style={{ opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10 }} d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"></path>
            </g>
        </g>
  </svg>
);

export default MySVGComponent;
