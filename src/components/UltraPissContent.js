import React from 'react';
import Banner from './Banner';
import './UltraPissContent.css';

// import ultraPissBanner from '../images/UltraPiss_Banner.avif';
// import ultraPissLogo from '../images/logo_UltraPiss.avif';

export default function UltraPissContent() {
    return (
        <div id='UP_Canvas' className='up_canvas'>
            <Banner
            // imageSrc1={ultraPissBanner}
            // imageSrc2={ultraPissLogo}
            />
            <div className="coming-soon-container">
                <h1 className="coming-soon-text">COMING SOON</h1>
            </div>
        </div>
    );
}