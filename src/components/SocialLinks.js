import React from 'react';
import { useLocation } from 'react-router-dom';
import twitter_logo from '../images/Icons/X_Logo.avif';
import youtube_logo from '../images/Icons/Youtube_Logo.avif';
import discord_logo from '../images/Icons/Discord_Logo.avif';
import steam_logo from '../images/Icons/Steam_Logo.avif';

import './SocialLinks.css';

export default function SocialLinks() {
    const location = useLocation();
    const isKickingBrassPage = location.pathname === '/kickingbrass';

    return (
        <div className={`social-links ${isKickingBrassPage ? 'kicking-brass-theme' : ''}`}>
            <a href="https://store.steampowered.com/app/2657210/Kicking_Brass/" target="_blank" rel="noopener noreferrer">
                <img src={steam_logo} alt="Steam Logo" className="navbar-icon" />
            </a>

            <a href="https://twitter.com/StepheightGames" target="_blank" rel="noopener noreferrer">
                <img src={twitter_logo} alt="Twitter Logo" className="navbar-icon" />
            </a>

            <a href="https://www.youtube.com/channel/UCtTJj2MDiIE9sjcd4jZgXsQ" target="_blank" rel="noopener noreferrer">
                <img src={youtube_logo} alt="YouTube Logo" className="navbar-icon" />
            </a>

            <a href="https://discord.com/invite/fbngXskVkW" target="_blank" rel="noopener noreferrer">
                <img src={discord_logo} alt="discord Logo" className="navbar-icon" />
            </a>
        </div>
    );
}