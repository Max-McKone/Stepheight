import React from 'react';
import { Box } from '@mui/material';
import '@google/model-viewer';
import './KickingBrassContent.css';

import kb_logo from '../images/logo_preview_12.png';

export default function KickingBrassContent() {


    return (
        <div>
            <div className="video-container">
                <img src={kb_logo} alt="Logo" className='kb-logo' />
            </div>

            <Box>
                <model-viewer
                    src="../images/Body_Gatling.glb"
                    alt="3D Model"
                    ar
                    auto-rotate
                    camera-controls
                    shadow-intensity="1"
                    style={{ width: '100%', height: '500px' }}
                > </model-viewer>
            </Box>
        </div>
    );
}