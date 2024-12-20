import React from 'react';
import { Card, CardContent } from '@mui/material';
import './UpdatesContent.css';

export default function UpdatesContent() {
    return (
        <div className="updates-content">
            <h1>Patch Notes</h1>

            <Card sx={{ marginBottom: '20px', backgroundColor: '#fffde6' }}>
                <CardContent>
                    <h2>Kicking Brass 0.06a</h2>
                    <h3>General Changes</h3>
                    <p>Shadow beneath the player is now clearer</p>
                    <p>More improvements to UI</p>

                    <h3>Enemy Changes</h3>
                    <p>The initial projectile of the heavy brass (not the small shockwave ones) now takes 1.4-2.4 seconds to land instead of 0.7 to 1.7</p>
                    <p>Glass furnace now only gives half a glass heart on kill</p>

                    <h3>Bugfixes</h3>
                    <p>Gatling Laser verticality has been fixed, making it much easier to jump over</p>
                    <p>The hitbox around gatling during his laser (not the hitbox of the laser itself) has been decreased by a bit more than 10%</p>
                    <p>Fixed a bug where pickups and money could get stuck beneath the floor</p>
                    <p>Fixed a bug where sometimes the game timer would update every 2 seconds instead of every second</p>
                    <p>Fixed a bug where the click hitboxes to swap left and right on the upgrade shop were smaller than intended</p>
                </CardContent>
            </Card>

            <Card sx={{ marginBottom: '20px', backgroundColor: '#fffde6' }}>
                <CardContent>
                    <h2>Kicking Brass 0.06</h2>
                    <h3>General Changes</h3>

                    <h3>Player Changes</h3>
                    <p>added a visual effect on spawn and death</p>

                    <h3>Enemy Changes</h3>
                    <p>Heavy brass now has a 4 second cooldown...</p>

                    <h3>Map Changes</h3>
                    <p>Environmental terrain changes have been added to waves 11-19</p>
                </CardContent>
            </Card>
        </div>
    );
}