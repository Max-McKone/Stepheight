import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo_nav.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import zIndex from '@mui/material/styles/zIndex';

const pages = ['KICKING_BRASS', 'ABOUT_US'];

export default function Navbar() {
  const location = useLocation();
  const isKickingBrassPage = location.pathname === '/kickingbrass';

  return (
    <div id='Nav'>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: "transparent" }} className={isKickingBrassPage ? 'navbar-kickingbrass' : 'navbar-default'}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>

            <input type="checkbox" id="nav-toggle" className="nav-toggle" />

            <Box component="section" className="nav-items">
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.replace('_', '').toLowerCase()}`}
                  sx={{ my: 2, display: 'block' }}
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
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}