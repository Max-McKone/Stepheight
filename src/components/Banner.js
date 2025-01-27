import './Banner.css';
import React from 'react';

function Banner({ primaryTitle, secondaryTitle, imageSrc1, imageSrc2, imageSrc3, imageSrc4 }) {
    return (
        <div className='Banner'>
            <h1 className='primary-title'>{primaryTitle}</h1>
            <h1 className='secondary-title'>{secondaryTitle}</h1>
            <img src={imageSrc1} className='BannerIMG1' onError="this.style.display='none'" alt='' />
            <img src={imageSrc2} className='BannerIMG2' onError="this.style.display='none'" alt='' />
            <img src={imageSrc3} className='BannerIMG3' onError="this.style.display='none'" alt='' />
            <img src={imageSrc4} className='BannerIMG4' onError="this.style.display='none'" alt='' />
        </div>
    );
}

export default Banner;