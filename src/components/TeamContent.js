import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './TeamContent.css';

import image1 from '../images/startup_sam.jpg';
import image2 from '../images/startup_peter.jpg';
import image3 from '../images/startup_oskar.jpg';
import poster from '../images/publi_poster-1.png';

export default function TeamContent() {
    return (
        <div className='aboutus-container'>
            <Card className="team-card" sx={{ boxShadow: 0 }}>
                <div className="team-content">
                    <div className="image-row">
                        {/* SAM */}
                        <Card className="image-card" sx={{ boxShadow: 0 }}>
                            <CardHeader
                                title="Sam Flentje"
                                subheader="@CheatinSloth"
                            />
                            <CardMedia
                                component="img"
                                alt="Sam"
                                height="240"
                                image={image1}
                            />
                            <CardContent>
                                <Typography>
                                    Pronouns: Any/All
                                </Typography>
                                <Typography>
                                    Composer, Sound Designer and Worldbuilder
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* PETER */}
                        <Card className="image-card" sx={{ boxShadow: 0 }}>
                            <CardHeader
                                title="Peter Dunn"
                                subheader="@PeteTheN00b"
                            />
                            <CardMedia
                                component="img"
                                alt="Peter"
                                height="240"
                                image={image2}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" className="pronouns">
                                    Pronouns: Any/All
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                    Programmer, Game Designer
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* OSKAR */}
                        <Card className="image-card" sx={{ boxShadow: 0 }}>
                            <CardHeader
                                title="Oskar Kraska McKone"
                                subheader="@McK"
                            />
                            <CardMedia
                                component="img"
                                alt="Oskar"
                                height="240"
                                image={image3}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" className="pronouns">
                                    Pronouns: He/Him
                                </Typography>
                                <Typography variant="body1" color="text.primary">
                                    Visual Artist, Environment Artist, Web Developer
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Card>

            <Card className="poster-card" sx={{ boxShadow: 0, backgroundColor: '#fffde6' }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CardContent>
                            <Typography variant="body1" color="text.secondary">
                                <b>ESF Sponsored</b>
                                <br />

                                One of our first and greatest achievements was acquiring funding from the Thüringer Zentrum für Existenzgründungen und Unternehmertum (ThEx). After a successful pitch, we received one year’s worth of funding for our preproduction, allowing us to drop side jobs and focus entirely on developing Kicking Brass. Excited by the energy and support we were able to instill in the jury, we’re optimistic about the future for Kicking Brass and Stepheight.
                            </Typography>

                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            alt="poster"
                            image={poster}
                            className="poster"
                            sx={{ maxWidth: '100%', borderRadius: '10px' }}
                        />
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}