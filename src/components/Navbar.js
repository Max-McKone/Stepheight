import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo_nav.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = ['ABOUT_US'];

export default function Navbar() {
  const location = useLocation();
  const isKickingBrassPage = location.pathname === '/kickingbrass';
  const isUltraPissPage = location.pathname === '/ultrapiss';

  // State for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div id='Nav'>
      <AppBar position="fixed" elevation={0} className={isKickingBrassPage ? 'navbar-kickingbrass' : 'navbar-default'}>
        <div id='NavBarMain'>
          <div id='NavBarTools'>
            <Link to="/">
              <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>

            <input type="checkbox" id="nav-toggle" className="nav-toggle" />

            <Box component="section" className="nav-items">
              {/* Dropdown for GAMES */}
              <Button
                onClick={handleOpenMenu}
                className="navbar-button"
              >
                GAMES
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                disableScrollLock={true}
                onClose={handleCloseMenu}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                className="navbar-dropdown"
              >
                <MenuItem
                  onClick={handleCloseMenu}
                  component={Link}
                  to="/kickingbrass"
                  className="navbar-dropdown-item"
                >
                  Kicking Brass
                </MenuItem>

                <MenuItem
                  onClick={handleCloseMenu}
                  component={Link}
                  to="/ultrapiss"
                  className="navbar-dropdown-item"
                >
                  PROJECT UP
                </MenuItem>
              </Menu>

              {/* Other Navbar Items */}
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.replace('_', '').toLowerCase()}`}
                  className="navbar-button"
                >
                  {page.replace('_', ' ')}
                </Button>
              ))}
            </Box>

            <label htmlFor="nav-toggle" className="nav-toggle-label">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>

      </AppBar>
    </div>
  );
}