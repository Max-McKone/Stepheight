import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Footer.css';
import twitter_logo from '../images/twitter_icon.png';
import youtube_logo from '../images/youtube_icon.png';
import discord_logo from '../images/discord_icon.png';
import steam_logo from '../images/Icons/Steam_Logo.avif';

import SocialLinks from './SocialLinks';

const Footer = () => {
    const location = useLocation();
    const isKickingBrassPage = location.pathname === '/kickingbrass';

    return (
        <div>
            <SocialLinks />
            <footer className={`footer ${isKickingBrassPage ? 'footer-kickingbrass' : ''}`}>
                <div className="footer-icons">
                    <a href="https://www.youtube.com/channel/..." target="_blank" rel="noopener noreferrer">
                        <img src={youtube_logo} alt="YouTube Logo" className={`footer-icon ${isKickingBrassPage ? 'footer-icon-kickingbrass' : ''}`} />
                    </a>
                    <a href="https://twitter.com/StepheightGames" target="_blank" rel="noopener noreferrer">
                        <img src={twitter_logo} alt="Twitter Logo" className={`footer-icon ${isKickingBrassPage ? 'footer-icon-kickingbrass' : ''}`} />
                    </a>
                    <a href="https://discord.com/invite/fbngXskVkW" target="_blank" rel="noopener noreferrer">
                        <img src={discord_logo} alt="Discord Logo" className={`footer-icon ${isKickingBrassPage ? 'footer-icon-kickingbrass' : ''}`} />
                    </a>
                    <a href="https://store.steampowered.com/app/2657210/Kicking_Brass/" target="_blank" rel="noopener noreferrer">
                        <img src={steam_logo} alt="Steam Logo" className={`footer-icon ${isKickingBrassPage ? 'footer-icon-kickingbrass' : ''}`} />
                    </a>
                </div>
                <div className="footer-text-content">
                    © {new Date().getFullYear()} Stepheight. All rights reserved.
                </div>
                <div className="footer-text-content">
                    <Link to="/impressum" rel="noopener noreferrer">Impressum</Link>
                </div>
            </footer >
        </div >
    );
};

export default Footer;