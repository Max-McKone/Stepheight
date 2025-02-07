import React from 'react';
import './AboutUsContent.css';
import Banner from './Banner'
import BannerIMG from '../images/Impressm_Banner_Faded.avif';
import Sam1 from '../images/Sam_1.jpg';
import Sam2 from '../images/Sam_2.jpg';
import Sam3 from '../images/Sam_3.jpg';
import Sam4 from '../images/Sam_4.jpg';
import Sam from '../images/sam.jpg';
import SamStartup from '../images/startup_sam.jpg';
import Oskar from '../images/oskar.jpg';
import Oskar1 from '../images/oskar_1.jpg';
import Oskar2 from '../images/oskar_2.jpg';
import OskarStartup from '../images/startup_oskar.jpg';
import Luca from '../images/luca_1.jpg';
import GamesCom1 from '../images/GamesCom_1.jpg';
import GamesCom2 from '../images/GamesCom_2.jpg';
import GamesCom3 from '../images/GamesCom_3.jpg';
import GamesCom4 from '../images/GamesCom_4.jpg';
import GamesCom5 from '../images/GamesCom_5.jpg';
import GamesCom6 from '../images/GamesCom_6.jpg';
import GamesCom7 from '../images/GamesCom_7.jpg';
import GamesCom8 from '../images/GamesCom_8.jpg';
import GamesCom9 from '../images/GamesCom_9.jpg';
import GameJam1 from '../images/GameJam_1.jpg';
import GameJam2 from '../images/GameJam_2.jpg';
import GameJam3 from '../images/GameJam_3.jpg';
import GameJam4 from '../images/GameJam_4.jpg';
import GameJam5 from '../images/GameJam_5.jpg';
import GameJam6 from '../images/GameJam_6.jpg';
import Rasmus1 from '../images/Rasmus_1.jpg';
import GGG1 from '../images/GGG_1.jpg';
import Amaze1 from '../images/Amaze_1.jpg';
import Amaze2 from '../images/Amaze_2.jpg';
import Amaze3 from '../images/Amaze_3.jpg';
import Amaze4 from '../images/Amaze_4.jpg';
import Poster from '../images/publi_poster-1.png';


export default function AboutUsContent() {
    return (
        <div id='aboutus-canvas'>
            <Banner id='aboutus-banner'
                primaryTitle={"ABOUT"}
                imageSrc1={BannerIMG}
            />

            <div id="AboutusElement">
                <h3>
                    STEP BY STEP
                </h3>
                <p>
                    Forming for what was originally a university project, we are one of only a handful of developers trying to make games in Thuringia.

                    Driven by an eagerness to create games in a region where very few people have tried so far, we seek to show that anybody can make games anywhere, regardless of background or location.

                    Our dedication stems from our desire to build a community, locally but also online.
                    We hope to cultivate an active following that wants to interact with us and help make our games be the best it can be.
                </p>

                <p>
                    We strive to push not only our skills, but game development in Thuringia as a whole to new heights, step by step, hand in hand.
                </p>
            </div>

            <div className='AboutusCollage'>

                <img src={SamStartup} alt="teamimg" className="CollageIMG" />
                <img src={Sam1} alt="teamimg" className="CollageIMG" />
                <img src={Sam2} alt="teamimg" className="CollageIMG" />
                <img src={GamesCom4} alt="teamimg" className="CollageIMG" />

                <img src={OskarStartup} alt="teamimg" className="CollageIMG" />
                <img src={GamesCom1} alt="teamimg" className="CollageIMG" />
                <img src={GamesCom9} alt="teamimg" className="CollageIMG" />
                <img src={GamesCom6} alt="teamimg" className="CollageIMG" />

            </div>

            <div id="AboutusElement">
                <h3>
                    OUR COMMUNITY, OUR FUEL
                </h3>
                <p>
                    It goes without saying that we wouldn't have gotten nearly this far without the unyielding support from
                    our local and online community. Every step so far has been shrouded in uncertainty and unknowns, taking risks and
                    sacrifices to make each one possible, despite that however, we have been able to take each step with confidence and vigor
                    knowing that we have people beind us who will be proud of us, and support us if we stumble or fail.
                </p>

                <p>
                    Making art, in any form, brings with it the unkown of how it will be recieved by others. Growing our community however has
                    proven to us time and time again, that our art can only get better when it is shared, critisised and discussed; doing the same for others is a given
                    as we are trying to encourage others to make games as a natural consequence of our transparency. For that reason we believe
                    above all else that our games can only get better the more we share our work and our proccess openly.
                </p>

                <p>
                    Thank you <a href={'https://bauhausgamesfabrik.itch.io/'}>Bauhaus Gamesfabrik</a>, for starting it all.
                </p>
                <p>
                    Thank you <a href={'https://www.uni-weimar.de/de/medien/institute/neudeli/'}>Neudeli</a>, for giving us a place to call ours, making us feel like a real studio and hosting our crazy events.
                </p>
                <p>
                    Thank you <a href={'https://r42.gg/'}>R42</a>, for taking us under your wing, boosting our skills and knowledge, opening up so many doors and making us feel at home from day one.
                </p>
                <p>
                    Thank you <a href={'https://goosegirl.games/'}>Goose Girl Games</a>, for being our partners in crime, always there to depend on and organising the bauhaus game jams.
                </p>
                <p>
                    Thank you <a href={'https://www.aufbaubank.de/'}>TaB</a>, for being the first funding institution to see our potential and having faith in us.
                </p>
                <p>
                    Thank you <a href={'https://www.mdm-online.de/'}>MDM</a>, for being the second funding institution to give us the base we need to live and work, taking us along to Gamescom and giving us a platform.

                </p>
                <p>
                    Last but not least, thank you to our <a href={'https://discord.com/invite/fbngXskVkW'}>discord community</a>, for pulling no punches in trying to break our games every patch, giving extremely valuable feedback, and enjoying the things we make regardless of how finished they are.

                </p>




            </div>

            <div className='AboutusCollage'>

                <img src={GameJam4} alt="teamimg" className="CollageIMG" />
                <img src={Amaze3} alt="teamimg" className="CollageIMG" />
                <img src={GameJam1} alt="teamimg" className="CollageIMG" />
                <img src={Oskar2} alt="teamimg" className="CollageIMG" />

                <img src={Rasmus1} alt="teamimg" className="CollageIMG" />
                <img src={GGG1} alt="teamimg" className="CollageIMG" />
                <img src={GamesCom3} alt="teamimg" className="CollageIMG" />
                <img src={Luca} alt="teamimg" className="CollageIMG" />


            </div>

            <div className='AboutusCollage'>
                <img src={GameJam6} alt="teamimg" className="CollageIMGSpecial" />
            </div>

            <div id='AboutusElement'>
                <img src={Poster} alt="teamimg" className="CollageIMGSpecial" />
            </div>

        </div>
    );
}
