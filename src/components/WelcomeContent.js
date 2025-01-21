import React, { useEffect, useState, useRef } from 'react';
import './WelcomeContent.css';
import Banner from './Banner';
import { Link } from 'react-router-dom';

import BannerIMG from '../images/Wimmel_Banner_Faded.avif';
import primaryTitle from '../images/STEPHEIGHT.gif';
import kb_banner from '../images/KB_Banner_Faded.avif';
import kb_logo from '../images/logo_KB.avif';

export default function Welcome() {
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

  return (
    <div className="welcome-page">
      <Banner imageSrc1={BannerIMG} />
      <img
        ref={(el) => (imagesRefs.current[0] = el)}
        className="Title"
        data-src={primaryTitle}
        src={loadedImages[primaryTitle] ? primaryTitle : ""}
        alt="STEPHEIGHT TITLE"
      />

      <div className="quote-section">
        <p className="quote-text">
          <span className="font-bold">
            "Stepheight is the natural outcome of a <i>desire to make video games.</i>"
          </span>
        </p>
        <p className="quote-author">-Oskar</p>
      </div>

      <div className="arrow-down">
        <i className="fa-solid fa-chevron-down"></i>
      </div>

      <div className="kb-banner">
        <div className="sticker-container">
          <div className="sticker">NEW</div>
        </div>

        <img
          ref={(el) => (imagesRefs.current[1] = el)}
          className="kb-banner-image"
          data-src={kb_banner}
          src={loadedImages[kb_banner] ? kb_banner : ""}
          alt="KB Banner"
        />

        <Link to="/kickingbrass" className="kb-logo-link">
          <img
            ref={(el) => (imagesRefs.current[2] = el)}
            className="kb-logo"
            data-src={kb_logo}
            src={loadedImages[kb_logo] ? kb_logo : ""}
            alt="KB Logo"
          />
        </Link>
      </div>
    </div>
  );
}