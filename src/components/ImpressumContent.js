import React from 'react';
import './ImpressumContent.css';
import Banner from './Banner'
import ImpressumIMG from '../images/Impressm_Banner_Faded.avif';

const Impressum = () => {
    return (
        <div className='impressum-canvas'>
            <Banner
                secondaryTitle={"Impressum"}
                imageSrc1={ImpressumIMG}
            />

            <div className="impressum-container">

                <h2>Stepheight UG (Haftungsbeschränkt) i.G.</h2>
                <p><strong>Address:</strong> Helmholtzstr. 15, 99423 Weimar</p>
                <p><strong>Managing Director:</strong> Samuel Flentje</p>
                <p><strong>Email:</strong> <a href="mailto:social@stepheight.com">social@stepheight.com</a></p>
                <p><strong>VAT ID:</strong> In process</p>
                <p><strong>Commercial Register:</strong> In process</p>

                <h3>Disclaimer</h3>
                <p>Despite careful content control, we do not assume any liability for the content of external links. The content of linked pages is the sole responsibility of their operators.</p>

                <h3>Privacy Policy</h3>
                <p>At Stepheight, we value your privacy. We do not actively collect personal data through our website unless you voluntarily provide it, for example, by contacting us directly. We also do not use any analytics tools or third-party cookies to monitor user behavior. Any cookies used are essential for basic functionality and do not track personal information.</p>

                <p>Like most websites, our hosting provider automatically collects information such as IP addresses and access times in server log files. This data is used solely for technical and security purposes and is not linked to any personal information.</p>

                <p>Our website may include content from third-party services (e.g., videos or social media). These third parties may collect information, and we recommend reviewing their privacy policies for more details.</p>

                <p>While we do not store or process personal data directly, we take the protection of any data collected through our hosting provider seriously. If you have concerns or questions, feel free to contact us.</p>

                <p>We reserve the right to update this privacy policy to reflect changes in our practices or applicable laws. Any changes will be posted on this page.</p>
            </div>

        </div>

    );
};

export default Impressum;