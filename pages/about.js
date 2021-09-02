import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Image from 'next/image';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `0px solid ${theme.palette.divider}`,
    },
    abtDesc: {
        display: 'grid',
        width: '100%',

        justifyContent: 'space-between',
        alignItems: 'center',

    },

    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },


    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

export default function About() {
    const classes = useStyles();

    return (
        <React.Fragment>

            <CssBaseline />
            <Container className="heroImg"></Container>

            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            </AppBar>
            {/* Hero unit */}
            <Container  component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    About
                </Typography>
                <Typography className={classes.abtDesc} variant="h5" spacing={2} align="left" display="flex" color="textSecondary" component="p">
                    <div className={classes.desc} >
                        iCultivate was born from the Youth Power Hack initiative organised by the Youth Power Panel, Restless Development, Project Everyone, and Unilever. Based in South Africa, the team comprises of Sibahle Magadlela and Kimberly Bediako.
                    </div>
                    <div className={classes.paper}>
                        iCultivate is an online platform that aims to offer inclusive and sustainable opportunities through an e-learning website and community-based training to cultivate South African youth towards employment and viable entrepreneurs.
                    </div>
                </Typography>
            </Container>
            <Container>
                <Typography variant="h6">
                    <div>

                        The fundamental goal or vision of iCultivate is to tackle and realise solutions related to the Sustainable Development Goal number 4 (SDG4), which focuses on ensuring "inclusive and equitable quality education" and promoting "lifelong learning opportunities for all" (United Nations 2020).  The world is continuing to integrate digital technology into everyday life, and this is no different in the education sector as the methods used for learning, working, and interacting are also changing. With SDG 4 in mind, our solution aims to contribute specifically to targets 4.3 and 4.4 of the ten targets listed under SDG 4, which are to "reduce barriers to skills development and technical and vocational education and training and provide lifelong learning opportunities for youth''. Target 4.3, which also aligns with iCultrivate's goal, focuses on developing employment opportunities and viable entrepreneurship initiatives.
                    </div>
                </Typography>
            </Container>
            <Container>
                <Typography variant="h6">
                    <div>
                        Follow iCultivate on social media and lets grow a community of young and able changemakers. Visit the Restless Development Website to learn more about the Youth Power Hack initiative and the fantastic projects they have worked on.
                    </div>
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container >

            </Container>
            {/* Footer */}
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}