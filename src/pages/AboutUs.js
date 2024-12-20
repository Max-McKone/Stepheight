// AboutUs.js
import React from 'react';
import './AboutUs.css';

import AboutUsContent from '../components/AboutUsContent';
import TeamContent from '../components/TeamContent';

export default function AboutUs() {
    return (
        <div className="aboutus-content">
            <AboutUsContent />
            <TeamContent />
        </div>
    );
}