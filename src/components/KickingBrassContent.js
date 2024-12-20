import React, { useState } from 'react';
import Banner from './Banner'
import { Typography, List, Card, Tabs, Tab, Grid, CardContent, Box } from '@mui/material';
import './KickingBrassContent.css';

import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';

import kb_logo from '../images/logo_KB.avif';
import kb_banner from '../images/KB_Banner_Faded.avif';
import banner01 from '../images/banner_01.jpg';
import kb_img1 from '../images/Promo_art_bw.png';
import controlsGif from '../images/Controls.gif';
import inventory from '../images/Inventory.png';

//Items
import amplifier from '../images/Items/Item_Amplifier.avif';
import hearts from '../images/hearts.png';
import frigid_loop from '../images/Items/Item_Frigid_Loop.avif';
import electro_loop from '../images/Items/Item_Lightning_Loop.avif';
import cinder_loop from '../images/Items/Item_Cinder_Loop.avif';
import ballet_skirt from '../images/Items/Item_Tutu.avif';
import chilli from '../images/Items/Item_Chilli.avif';
import cookie from '../images/Items/Item_Cookie.avif';
import egg from '../images/Items/Item_Egg.avif';
import bottled_starlight from '../images/Items/Item_Bottled_Starlight.avif';
import fleet_feather from '../images/Items/Item_Fleet_Feather.avif';
import Heart_Marver from '../images/Items/Item_Heart_Marver.avif';
import gread_armour from '../images/Items/Item_Greed_Armour.avif';
import healing_amulet from '../images/Items/Item_Heart_Amulet.avif';
import oven_mittens from '../images/Items/Item_Oven_Mittens.avif';
import piggybank from '../images/Items/Item_Piggybank.avif';
import plate_armour from '../images/Items/Item_Plate_Armour.avif';
import potato from '../images/Items/Item_Potato.avif';
import rusty_shield from '../images/Items/Item_Fragil_Shield.avif';
import soul_loop from '../images/Items/Item_Soul_Loop.avif';
import soup from '../images/Items/Item_Soup.avif';
import substitute_doll from '../images/Items/Item_Substitute_Doll.avif';
import thorn_mantle from '../images/Items/Item_Thorn_Mantle.avif';
import bottles_tornado from '../images/Items/Item_Bottled_Tornado.avif';
import berserk_gloves from '../images/Items/Item_Berserk_Gloves.avif';
import berserk_potion from '../images/Items/Item_Berserk_Potion.avif';
import boxing_gloves from '../images/Items/Item_Boxing_Gloves.avif';
import Cake from '../images/Items/Item_Cake.avif';
import Call_Bell from '../images/Items/Item_Call_Bell.avif';
import Christmas_Ball from '../images/Items/Item_Christmas_Ball.avif';
import Egg_Basket from '../images/Items/Item_Egg_Basket.avif';
import Fire_walkers from '../images/Items/Item_FireWalkers.avif';
import Fluffy_Robes from '../images/Items/Item_Fluffy_Robes.avif';
import Fragile_Sword from '../images/Items/Item_Fragile_Sword.avif';
import glue from '../images/Items/Item_Glue.avif';
import Gold_Ring from '../images/Items/Item_Boxing_Gloves.avif';
import Gusty_Loop from '../images/Items/Item_Gusty_Loop.avif';
import Health_potion from '../images/Items/Item_Health_Potion.avif';
import Leap_lord from '../images/Items/Item_Leap_Lords.avif';
import Leather_tunic from '../images/Items/Item_Leather_Tunic.avif';
import Metronome from '../images/Items/Item_Metronome.avif';
import Noteburst_gloves from '../images/Items/Item_Noteburst_Gloves.avif';
import patient_gloves from '../images/Items/Item_Patient_Gloves.avif';
import repulsor from '../images/Items/Item_Repulsor.avif';
import sliding_socks from '../images/Items/Item_Sliding_Socks.avif';
import Song_Slingers from '../images/Items/Item_Song_Slingers.avif';
import Sprinting_Shoes from '../images/Items/Item_Sprinting_Shoes.avif';
import Stereo_Shirt from '../images/Items/Item_Stereo_Shirt.avif';
import Stone_Loop from '../images/Items/Item_Stone_Loop.avif';
import Tumbling_boots from '../images/Items/Item_Tumbling_Boots.avif';
import Capacitor from '../images/Items/Item_Unstable_Capacitor.avif';
import Void_Baton from '../images/Items/Item_Void_Baton.avif';


//INSTRUMENTS
import lyre from '../images/Instruments/Instrument_Lyre.avif';
import snare from '../images/Instruments/Instrument_Snare.avif';
import xylophone from '../images/Instruments/Instrument_Xylophone.avif';
import Double_Bass from '../images/Instruments/Instrument_Double_Bass.avif';
import E_Bass from '../images/Instruments/Instrument_E_Bass.avif';
import Lotus_Flute from '../images/Instruments/Instrument_Lotus_Flute.avif';
import saxophone from '../images/Instruments/Instrument_Saxophone.avif';
import Trumpet from '../images/Instruments/Instrument_Trumpet.avif';
import violin from '../images/Instruments/Instrument_Violin.avif';

// ENEMIES
// import goose from '../images/goose_walk_right.gif';
// import gary from '../images/gatling_walk_right.gif';
// import mike from '../images/drumen_walk_right.gif';
// import gerhard from '../images/heavybrass_walk_right.gif';
// import brassarian from '../images/bb_walk_right.gif';
// import michaela from '../images/Michaela_walk_right.gif';
// import clyde from '../images/Clyde_spin_attack.gif';
// import roger from '../images/gunner_walk_right.gif';
// import tybalt from '../images/melen_walk_right.gif';
// import bill from '../images/saxen_walk_right.gif';

export default function KickingBrassContent() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='kb-canvas'>
            <Banner
                imageSrc1={kb_banner}
                imageSrc2={kb_logo}
            />


            <Tabs
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "#a16edd"
                    }
                }}
            >
                <Tab label="About" />
                <Tab label="Download" />
                <Tab label="Tutorial" />
                <Tab label="Glossary" />
            </Tabs>

            <Box sx={{ width: '100%', p: 3 }}>
                {value === 0 && <AboutTab />}
                {value === 1 && <DownloadTab />}
                {value === 2 && <TutorialTab />}
                {value === 3 && <GlossaryTab />}
            </Box>
        </div>
    );
}

function AboutTab() {
    return (
        <Card sx={{ backgroundColor: '#ffffff00', boxShadow: 0, }} className="card">
            <CardContent>
                <h1>THE WORLD OF KICKING BRASS</h1>

                <h2>You awaken with no memory of your past, there’s a talking tuba on your head and it wants you to fight!</h2>

                <div className="banner01-container">
                    <img className="banner01-image" src={banner01} alt="Banner" />
                </div>

                <p>
                    Drawing on the Tuba Knight memes, Kicking Brass is set in a world where music dictates everyday life.
                </p>

                <p>
                    Tools, weapons, clothing and everyday objects are replaced by instruments, whose music is intrinsically magical.
                </p>

                <p>
                    Each family of instruments has unique abilities and shapes the way their users live. The Emperor Brasshoven of the Brass Empire, however, has begun pitting warriors and citizens against each other in his arena for his amusement.
                </p>

                <p>
                    Somehow Gurdy, a teen with no memory of their past has been taken for the arena and now sports a talking tuba on their head. Not all bad though, this tuba seems to have granted Gurdy the ability to play any instrument as well as evade defeat, at least briefly!
                </p>

                <p>
                    It is up to Gurdy to fight their way to the top of the arena and free themselves from this strange limbo.
                </p>

                <h1>THE COLOSSEUM</h1>

                <div className="banner01-container">
                    <img className="banner01-image" src={kb_img1} alt="Banner" />
                </div>

                <h2>The gates to King Brasshoven’s colosseum open once again!</h2>

                <h3>
                    For centuries only the strongest, bravest, and dumbest warriors from all over the continent have made their way to these sacred grounds in order to prove themselves (and/or die horrifically).
                </h3>

                <p>
                    Inspired by the Tuba Knight memes, this third-person bullet hell roguelike places you in an arena where music is your only defense.
                </p>

                <p>
                    Shoot your way through wave after wave of trumpet-wielding enemies and weird, whimsical bosses. With over 50 instruments and items to choose from, your options are endless!
                </p>

                <p>
                    The magical tuba on your head can save you a few times but fail too often and you start over.

                </p>

                <p>
                    Collect gear, upgrade it, and master your instruments to prove your dominance over the other arena contestants.

                </p>

                <p>
                    Every 10th wave you must face a former champion of the Arena, such as Gatling Gary: an experimental amalgamation of instruments and steampunk tech.

                </p>

                <p>
                    Shopkeepers Floog, Elvo, Melven and Jerome are there to supply you with fresh gear to improve your odds.
                </p>

            </CardContent>
        </Card>
    );
}

function DownloadTab() {
    const bucketName = "stepheight_downloads";
    const urlKB_A_01a = `https://storage.googleapis.com/storage/v1/b/${bucketName}/o/KB_A_01a.zip?alt=media`;
    const urlKB_Archive = `https://drive.google.com/drive/u/1/folders/1Wz8C1hsxhlx0hPawPY-jWRFrns9XTt5-`;

    return (
        <div className="glossary-container">
            <h1>DOWNLOADS</h1>
            <Card className="card" sx={{ backgroundColor: '#201230', boxShadow: 0, marginBottom: '20px' }}>
                <CardHeader
                    title="Kicking Brass 0.1a"
                    subheader=""
                    className="kickingbrass-cardheader"
                />
                <CardContent sx={{ boxShadow: 0, }}>
                    <iframe src="https://store.steampowered.com/widget/2657210/" frameborder="0" width="646" height="190" title='Steam Downloader'></iframe>
                    <h3>OR</h3>
                    <Button
                        className="kickingbrass-button"
                        href={urlKB_A_01a}
                        download="KB_A_01a"
                        sx={{ boxShadow: 0, }}
                    >
                        WEB DOWNLOAD
                    </Button>
                    <h3>To play, exstract und run "kicking_brass.exe"</h3>


                </CardContent>
            </Card>

            <Card className="card" sx={{ backgroundColor: '#201230', boxShadow: 0 }}>
                <CardHeader
                    title="KB Archive"
                    subheader="Old versions of the game for nostalgia sake"
                    className="kickingbrass-cardheader"
                />
                <CardContent>
                    <Button
                        className="kickingbrass-button"
                        href={urlKB_Archive}
                        download="KB_Archive"
                    >
                        Download
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

function TutorialTab() {
    return (
        <Card sx={{ backgroundColor: '#201230', boxShadow: 0, padding: '20px', width: '100%' }} className="card">
            <h1>CONTROLS</h1>
            <Card sx={{
                backgroundColor: '#201230', boxShadow: 0
            }} className="card">
                <CardContent>
                    <div className="controls-container">
                        <ul className="dense-list">
                            <li><p>[W] - Move Forward</p></li>
                            <li><p>[A] - Move Left</p></li>
                            <li><p>[S] - Move Backward</p></li>
                            <li><p>[D] - Move Right</p></li>
                            <li><p>[Space] - Jump Up and Down</p></li>
                            <li><p>[Double tap Directional Input] - Short Slide in direction</p></li>
                        </ul>
                        <ul className="dense-list">
                            <li><p>[Cursor] - Aim</p></li>
                            <li><p>[Ctrl] - Camera to Cursor</p></li>
                            <li><p>[LMB] - Primary Attack</p></li>
                            <li><p>[RMB] - Secondary Attack</p></li>
                            <li><p>[I] - Toggle Inventory</p></li>
                            <li><p>[Space + Directional Input] - Jump Roll in direction</p></li>

                            <li><p>[F] - Interact</p></li>
                        </ul>
                        <ul className="dense-list">
                            <li><p>[Scroll Up] - Next Instrument</p></li>
                            <li><p>[E] - Next Instrument</p></li>
                            <li><p>[Scroll Down] - Prev Instrument</p></li>
                            <li><p>[Q] - Prev Instrument</p></li>
                            <li><p>[1] [2] [3] - Use Item</p></li>
                            <li><p>[Esc] - Toggle Menu</p></li>

                        </ul>
                    </div>
                    <img src={controlsGif} className='glossary-image' alt="Controls GIF" />
                </CardContent>

            </Card>
            <h1>INVENTORY</h1>
            <Card sx={{ backgroundColor: '#201230', boxShadow: 0, marginTop: '20px', width: '100%' }} className="card">
                <CardContent>

                    <List dense>
                        <p>
                            Your inventory is divided into three main sections. The first section is shaped like a plus sign and is reserved for Equipment — these are your passive clothing Items such as Headwear, Gloves, Chest/back pieces, Shoes, Trousers, and Trinkets like necklaces. Remember, only one piece of Equipment per type can be worn at a time.
                        </p>

                        <img src={inventory} alt="Inventory" className='glossary-image' />

                        <p>
                            The second section contains your Active Items, which are the most frequently used. This section is always visible and includes three item boxes. You can use the Items by pressing the default keys [1], [2], or [3]. Active Items with cooldowns will show a timer until they're ready again, while consumables will disappear after use, freeing up their slot.
                        </p>
                        <p>
                            The third section holds your Instruments, with space for up to three. To switch between them, use the scroll wheel or the default keys [Q] and [E]. When viewing the full inventory, you can rearrange Items by dragging them to a new slot or remove them from your inventory by dragging them out into the surrounding empty space.
                        </p>

                    </List>
                </CardContent>
            </Card>

            <h1>DEALING DAMAGE</h1>
            <Card sx={{ marginBottom: '20px', backgroundColor: '#201230', boxShadow: 0, width: '100%' }} className="card">
                <CardContent>

                    <List dense>
                        <p>
                            At the start of your journey, you have three hearts. Each enemy hit will cost you one heart, so guard them carefully! To increase your heart count, pick up a max heart. To replenish health, consume Items like cookies. However, beware: if you lose all your hearts, you'll be sent back to your last checkpoint, as long as you have extra lives remaining. Run out of extra lives, and you'll have to start over from the beginning of your run.
                        </p>

                        <img src={hearts} alt="hearts" className='glossary-image' />
                        <p>
                            Sometimes, you might find a [glass heart]. Think of this as a temporary shield; it can take one hit before shattering. If you avoid taking damage, the [glass heart] will still vanish after a brief period. So make good use of it while it lasts!
                        </p>
                        <p>
                            Understand the Notes and Shattering system:
                            Enemy projectiles deal varying amounts of damage based on their musical notation. An [8th] note, the smallest projectile, inflicts half a heart of damage. These can be linked together by a beam, forming [2-8ths] or [3-8ths]. When hit by connected notes, the damage you take is cumulative of the number of [8th] notes connected. A [4th] note will damage one heart, a [half] note takes away two hearts, and a [whole] note will deplete four hearts.
                        </p>
                        <p>
                            Projectiles follow different paths based on their originating instrument. While the lyre and trumpet fire in straight lines, the saxophone arcs its shots, and the violin's notes orbit around. Some weapons don't emit projectiles, offering unique strategies to discover.
                        </p>
                        <p>
                            Shattering is a defensive technique allowing you to break projectiles. When shattered, they reverse direction and split into two, each inflicting half the original damage. For instance, shatter a [half] note to get two [4th] notes. Shatter connected [8th] notes, and they'll break into individual notes. However, [ghost notes]—like those from a violin—won't cause damage unless shattered. Upon impact with a shattered [ghost note], it transforms into damaging [8th] notes.
                        </p>
                    </List>
                </CardContent>
            </Card>
        </Card>
    );
}

/* {[
                    { name: 'ROGER', description: 'Shoots [8th] notes at you. Waiting for a promotion.', image: roger },
                    { name: 'TYBALT', description: 'Either stands in front of units to protect them or charges at you with a sharpened oboe. The crash cymbal shield blocks damage this unit would take, but can be destroyed, leaving the unit stunned with its guard down.', image: tybalt },
                    { name: 'BILL', description: 'Fires a lobbed [4th] projectile that explodes into [8th] when it lands. Tries to predict your movement.', image: bill },
                    { name: 'GOOSE', description: 'Honk.', image: goose },
                    { name: 'GERHARD', description: 'Fires a lobbed [4th] at the player which when it lands will explode into an enormous slow moving shockwave of [8th].', image: gerhard },
                    { name: 'MICHAELA', description: 'The fastest hand in the west. Michaela uses her impressive guitar solo skills to smite those she faces in combat with lightning from above! In her free time she enjoys finding ways to make her heels even pointier.', image: michaela },
                    { name: 'CLYDE', description: 'The fastest hat in the west. Clyde once slipped and fell onto a cymbal headfirst and he hasn\'t stopped spinning on it since! While spinning Clyde is immune to projectiles and even reflects them back, his constantly rotating state means that his steering leaves much to be desired. This might even leave you with an opening!', image: clyde },
                    { name: 'MIKE (On holiday)', description: 'Creates shockwaves which either cause other nearby enemies to be healed for [1 heart] over 5 seconds, or causes other nearby enemies to immediately attack.', image: mike },
                    { name: 'GATLING GARY', description: 'Literally the big guns. Gatling moves slowly and carries an oversized tuba which shoots large groups of projectiles. Each attack pushes him backwards. If he runs into a wall he takes a small amount of damage and is stunned briefly. If desperate, he may feel the need to overcharge his weapon.', image: gary },
                    { name: 'THE BRASSBARIAN', description: 'Brings down the lightning. Brassbarian rampages around with a double bass larger than you. He chases you around with leaps, swings and slams, and will rain down more lightning on you as the fight progresses. Although many people come to watch his deadly bass solo, few have the luxury of surviving it.', image: brassarian }].map((item, index) => (
                        <Card key={item.name + index} className='Items-card' sx={{ mt: 2, mb: 2, backgroundColor: '#201230', boxShadow: 0, marginTop: '20px', width: '100%' }}>
                            <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                                        <img src={item.image} alt={item.name} className='glossary-image' />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                                        <h3>{item.name}</h3>
                                        <Typography paragraph>{item.description}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))} */

function GlossaryTab() {
    return (
        <Card sx={{ backgroundColor: '#ffffff00', boxShadow: 0 }} className="card">
            <CardContent>
                <div className="glossary-container">

                    <h1> Glossary</h1>
                    <h2>INSTRUMENTS</h2>
                    {[
                        { name: 'LYRE', description: 'Primary: Shoots [2 connected 8th] in a straight trajectory. Secondary: Shoots 5 [2 connected 8th] in sequence, in alternating directions and slows the player. Individual enemies can’t get hit more than once by each sequence.', image: lyre },
                        { name: 'SNARE', description: 'Primary: Commands all minion units to fire. Secondary: Rearranges the formation of all minions you own. Passive: Summons two sousaphone minions.', image: snare },
                        { name: 'XYLOPHONE', description: 'Primary: Summons a spooky scary skeleton. Secondary: Detonates all minions you own.', image: xylophone },
                        { name: 'SAXOPHONE', description: 'Primary: Fires a lobbed [2 connected 8th]. The value (damage) of the note increases to [quarter] if the attack was charged. Secondary: Lobs a projectile that pulls units towards it. The radius increases if the attack was charged.', image: saxophone },
                        { name: 'TRUMPET', description: 'Primary: Fires a [2 connected 8th] projectile and accumulates water. If charged you shoot a [triplet]. Secondary: Releases all accumulated water in a burst of damage and shatters projectiles. The water remains as a puddle which slows enemy units. The more water was accumulated, the stronger the effects of this move are.', image: Trumpet },
                        { name: 'VIOLIN', description: 'Primary: Swings the bow in melee range. Capable of shattering projectiles. Secondary: Creates [3 connected 8th] projectiles that orbit you. Every second projectile spawns as a ghost projectile that can be shattered, but will not deal damage while orbiting.', image: violin },
                        { name: 'DOUBLE BASS', description: 'Primary: Swings the bass in an arc in front of you. Cancel jumping to slam the ground below your current position. Damage increases depending on the height you start the slam from. Secondary: Leap forward and into the air.', image: Double_Bass },
                        { name: 'ELECTRIC BASS', description: 'Primary: Swings the bass in an arc in front of you. Cancel jumping to slam the ground below your current position. Damage increases depending on the height you start the slam from. Secondary: Leap forward and into the air.', image: E_Bass },
                        { name: 'LOTUS FLUTE', description: 'Primary: Swings the bass in an arc in front of you. Cancel jumping to slam the ground below your current position. Damage increases depending on the height you start the slam from. Secondary: Leap forward and into the air.', image: Lotus_Flute },
                    ].map((item, index) => (
                        <Card key={item.name + index} className='Items-card' sx={{ mt: 2, mb: 2, backgroundColor: '#201230', boxShadow: 0, marginTop: '20px', width: '100%', paddingLeft: '5%', paddingRight: '5%' }}>
                            <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                                        <img src={item.image} alt={item.name} className='glossary-image' />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                                        <h3>{item.name}</h3>
                                        <Typography paragraph>{item.description}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}

                    <h1>Items</h1>

                    {[
                        { name: 'AMPLIFIER', description: '', image: amplifier },
                        { name: 'BALLET SKIRT', description: 'Passive: Jumping makes you perform a pirouette when you land which shoots a spiral of [8th] projectiles around you.', image: ballet_skirt },
                        { name: 'BERSERK GLOVES', description: '', image: berserk_gloves },
                        { name: 'BERSERK POTION', description: '', image: berserk_potion },
                        { name: 'BOTTLED STARLIGHT', description: 'Active: Creates an expanding domain in which stars rain down upon up to 5 enemies every 0.75 seconds. These stars deal [1] damage to whoever they directly strike, and [0.5] damage to anyone near them. Cooldown: 18 Seconds.', image: bottled_starlight },
                        { name: 'BOXING GLOVES', description: 'Active: Creates an expanding domain in which stars rain down upon up to 5 enemies every 0.75 seconds. These stars deal [1] damage to whoever they directly strike, and [0.5] damage to anyone near them. Cooldown: 18 Seconds.', image: boxing_gloves },
                        { name: 'BOTTLED TORNADO', description: '', image: bottles_tornado },
                        { name: 'CAKE', description: '', image: Cake },
                        { name: 'CALL BELL', description: '', image: Call_Bell },
                        { name: 'CHILLI', description: 'Active: Doubles damage dealt and taken for 15 seconds. Consumed on use. Does not stack.', image: chilli },
                        { name: 'CLYDEMAS ORNAMENT', description: '', image: Christmas_Ball },
                        { name: 'CINDER LOOP', description: 'Active: Lobs a fireball towards the targeted location, erupting in a fiery explosion when it touches the ground, knocking away nearby enemies and dealing [1.5] damage to them. Cooldown: 6 Seconds.', image: cinder_loop },
                        { name: 'COOKIE', description: 'Active: Restores [1 heart] on use. Consumed on use.', image: cookie },
                        { name: 'EGG BASKET', description: '', image: Egg_Basket },
                        { name: 'EGG', description: '', image: egg },
                        { name: 'FIRE WALKERS', description: '', image: Fire_walkers },
                        { name: 'FLEET FEATHER', description: 'Active: Gain a burst of 100% increased movement speed, decaying over 3 seconds. Cooldown: 10 Seconds.', image: fleet_feather },
                        { name: 'FLIFFY', description: '', image: Fluffy_Robes },
                        { name: 'FRIGID LOOP', description: 'Active: Hurl a frozen spear in the target direction, piercing enemies for [1] damage and freezing them for 2 seconds. Cooldown: 12 Seconds.', image: frigid_loop },
                        { name: 'GOLD RING', description: '', image: Gold_Ring },
                        { name: 'FRAGILE SWORD', description: '', image: Fragile_Sword },
                        { name: 'GREED ARMOUR', description: 'Passive: Taking damage will instead drain your sheet music, if possible. You lose 10 sheets per point of [1 heart] damage taken. Half of the money lost will drop onto the floor near you.', image: gread_armour },
                        { name: 'GUSTY LOOP', description: '', image: Gusty_Loop },
                        { name: 'HEALTH POTION', description: '', image: Health_potion },
                        { name: 'HEALING ALUMENT', description: 'Active: Heals [1 heart]. Has a chance to be damaged when used. After being damaged 3 times it will break, disappearing completely. If it is only damaged but not broken it can be repaired at Jerome. Cooldown: 5 Seconds.', image: healing_amulet },
                        { name: 'HEART SHAPED MARVER', description: '', image: Heart_Marver },
                        { name: 'LEAP LORDS', description: '', image: Leap_lord },
                        { name: 'LEATHER TUNIC', description: '', image: Leather_tunic },
                        { name: 'ELECTRO LOOP', description: 'Active: Channels a beam of light which follows your cursor. After 1 second it strikes the ground, dealing [1] damage. Cooldown: 7 Seconds.', image: electro_loop },
                        { name: 'METRONOME', description: '', image: Metronome },
                        { name: 'NOTEBURST GLOVES', description: '', image: Noteburst_gloves },
                        { name: 'OVEN MITTENS', description: 'Passive: Every 5 Enemies you defeat create a cookie in your inventory. Cookies created this way have a low chance of spawning as a pizza instead', image: oven_mittens },
                        { name: 'PATIENT GLOVES', description: '', image: patient_gloves },
                        { name: 'PIGGYBANK', description: 'Passive: If carried through one round, explodes in a rain of sheet music (30 sheets).', image: piggybank },
                        { name: 'POTATO', description: 'Active: Halves damage taken for 20 seconds. Consumed on use. Does not stack.', image: potato },
                        { name: 'PLATE ARMOUR', description: 'Passive: Reduces all damage taken by [quarter heart] to a minimum of [quarter heart].', image: plate_armour },
                        { name: 'REPULSOR', description: '', image: repulsor },
                        { name: 'RUSTY SHIELD', description: 'Active: Gain [1 glass heart] for 3 seconds. Cooldown: 8 Seconds.', image: rusty_shield },
                        { name: 'SLIDING SOCKS', description: '', image: sliding_socks },
                        { name: 'SONG SLINGERS', description: '', image: Song_Slingers },
                        { name: 'SOUL LOOP', description: 'Active: Releases 5 homing souls which chase down nearby enemies, dealing [1] damage and fearing them for 2 seconds, causing them to run away from you. Doesnt have a cooldown but instead recharges by defeating 5 enemies.', image: Stone_Loop },
                        { name: 'SOUP', description: 'Active: Slowly heals [3 hearts] over 15 seconds. Consumed on use. Does not stack.', image: soup },
                        { name: 'SPRINTING SHOES', description: '', image: Sprinting_Shoes },
                        { name: 'STEREO SHIRT', description: '', image: Stereo_Shirt },
                        { name: 'STONE LOOP', description: 'Active: Releases 5 homing souls which chase down nearby enemies, dealing [1] damage and fearing them for 2 seconds, causing them to run away from you. Doesnt have a cooldown but instead recharges by defeating 5 enemies.', image: soul_loop },
                        { name: 'SUBSTITUTE DOLL', description: 'Passive: Upon taking lethal damage will sacrifice itself to fully heal you.', image: substitute_doll },
                        { name: 'THORN MANTLE', description: 'Passive: Taking damage retaliates with a burst of projectiles.', image: thorn_mantle },
                        { name: 'TUMBLING BOOTS', description: '', image: Tumbling_boots },
                        { name: 'UNSTABLE CAPACITOR', description: '', image: Capacitor },
                        { name: 'VOID BATON', description: '', image: Void_Baton },
                        { name: 'YAMAGUCHI GLUE', description: '', image: glue },


                    ].map((item, index) => (
                        <Card key={item.name + index} className='Items-card' sx={{ mt: 2, mb: 2, backgroundColor: '#201230', boxShadow: 0, marginTop: '20px', width: '100%', paddingLeft: '5%', paddingRight: '5%' }}>
                            <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
                                        <img src={item.image} alt={item.name} className='glossary-image' />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
                                        <h3>{item.name}</h3>
                                        <Typography paragraph>{item.description}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </CardContent>
        </Card>
    );
}