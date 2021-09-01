import React from 'react';
import Link from 'next/link';
import HoverRating from "../components/HoverRating";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Row } from 'reactstrap';
import { ReactVideo } from "reactjs-media";
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  containerCourseSelected: {
    width: '100vw',
    position: 'relative',
    top: ' 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left'
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },

  backDrop: {
    position: 'absolute',
    top: '10vh',
    width: '100vw',
    left: '0',
    height: '50vh',
    backgroundColor: `#212121`
  },
  csrClasses: {
    top: '20%',
    position: 'relative'
  },
  csrTitle: {
    color: "#fff",
    fontSize: "3rem",
    position: "relative",
  },
  otherCourseSec: {
    position: 'relative',
    height: '100vh',
    top: '70vh'
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

export default function SSRPage() {
  const classes = useStyles();

  return (
    <>
      <div className="mb-5" data-testid="csr">
        <div className={classes.backDrop} >
        <Container className={classes.containerCourseSelected}>
          <div className={classes.csrClasses} data-testid="csr-classes">

            <h1 className={classes.csrTitle} data-testid="csr-title"
            >
              Cultivating your side hustle
            </h1>
            <p style={{
              fontSize: "20px",
              color: "grey",
              width: "30%"
            }}>This tutorial series is all about Cultivating your side hustle. The series is made up of four tutorials which are about 10 minutes long. We will provide you with information that can assist you in cultivating your side hustle under these four main areas.</p>
            <div className="tag-popular"
              style={{
                backgroundColor: "lightGreen",
                width: "70px",
                fontSize: "12px",
                textAlign: "center",
                position: "relative",
                borderRadius: "10px"
              }}>Popular</div>
            <div className="starRatings">
              <div className="starItem">
              </div>
              <div className="starItem">
              </div>
              <div className="starItem">
              </div>
              <div className="starItem">
              </div>
            </div>
            <p>Last updated 5/2021 English, Setswana, Afrikaans.</p>
            <Button variant="contained" color="primary" className="btn-get-started ">
              <Link
                href={{
                  pathname: '/',
                }}
              >
                <a className="span" href="/">Wishlist</a>
              </Link>

            </Button>
            <Button variant="contained" color="secondary" className="btn-share ">
              <Link
                href={{
                  pathname: '/',
                }}
              >
                <a className="span" href="/">Share</a>
              </Link>

            </Button>

          </div>
          
        </Container>
        </div>
       
        <Container className={classes.otherCourseSec}>
          <Grid >
        <ReactVideo
                src="/Cultivating Sidehustle Freelancing-1.m4v"
                poster="https://www.example.com/poster.png"
                primaryColor="red"
                // other props
            />
            <Typography variant="h2">
              Requierments
            </Typography>
            </Grid>
        </Container>
      </div>



    </>

  );
};
