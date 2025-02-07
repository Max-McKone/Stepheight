import React, { useEffect, useState, useRef } from 'react';
import './WelcomeContent.css';
import Banner from './Banner';
import { Link } from 'react-router-dom';

import BannerIMG from '../images/Wimmel_Banner_Faded.png';
import primaryTitle from '../images/STEPHEIGHT.gif';
import kb_banner from '../images/Main_Poster.jpg';
import kb_logo from '../images/logo_KB.avif';

export default function Welcome() {
  /*
  const [loadedImages, setLoadedImages] = useState({});
  const imagesRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const dataSrc = target.getAttribute('data-src');
          if (dataSrc) {
            target.src = dataSrc;
            setLoadedImages((prev) => ({ ...prev, [dataSrc]: true }));
            observer.unobserve(target);
          }
        }
      });
    });

    imagesRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  <Banner imageSrc1={BannerIMG} />
      <img
        ref={(el) => (imagesRefs.current[0] = el)}
        className="Title"
        data-src={primaryTitle}
        src={loadedImages[primaryTitle] ? primaryTitle : ""}
        alt="STEPHEIGHT TITLE"
      />
  */

  return (
    <div id="welcome-page">

      <Banner id='aboutus-banner'
        primaryTitle={"STEPHEIGHT"}
        imageSrc1={BannerIMG}
      />

      <div className="quote-section">
        <p className="quote-text">
          the natural outcome of a <b>desire to make video games.</b>
        </p>
      </div>

      <div className="arrow-down">
        <i className="fa-solid fa-chevron-down"></i>
      </div>

      <div className="kb-banner">

        <div className="sticker-container">
          <div className="sticker">NEW</div>
        </div>

        <a href={"/kickingbrass"}><img src={kb_banner} alt="teamimg" className="kb-banner-image" /></a>

      </div>

    </div>
  );
}