import React, { useRef } from "react";
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
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
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


export default function Content() {
  const classes = useStyles();

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <>
      <div className="container-main " data-testid="content-items">
        <section className="landing">
          <h1 className="title" data-testid="title">iDream, iCan, iCultivate
          </h1>
          <h2 className="description" >
            Welcome to the
            cultivation station. You’re probably on this site because you have a dream,
            a goal or a passion you would like to cultivate into a potential career. We
            would really like to get to know you and what your interests are to better
            customize your experince on iCultivate.
          </h2>
          <button className="btn-get-started ">
            <Link
              href={{
                pathname: '/ssr',
              }}
            >
              <a className="span" href="./pricing.js">Get started</a>
            </Link>
          </button>
          <div className="tick-1"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" margin="10px" width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z" /></svg>Skilled and experienced coaching.</div>
          <div className="tick-2"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" margin="10px" width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z" /></svg>Supportive coaching.</div>

          <lottie-player
            id={"firstlottie"}
            autoplay
            loop
            mode="normal"
            src="https://assets5.lottiefiles.com/packages/lf20_bpqri9y8.json"
          ></lottie-player>

          <section className="info-section">
            <h1 className="info-title">
              A variety courses to choose from.
            </h1>
            <section className="cards-section">
              <div className="card"></div>
            </section>
          </section>
        </section>
        <div className="banner-strip">
          <div className="banner-item"></div>
        </div>
        <section className="how-to-section">
          <div className="inner-section-1">
            <p className="how-to-heading">Create your account and
              start learning</p>
            <h1 className="how-to-title">
              The tutorials on iCultivate are pre-recorded lessons
              that can be accessed at any time. Need help
              understanding the tutorial? Chat with the facilitator in
              the chat box and they will assist you.
            </h1>
            <h2 className="how-to-info">
              A lesson or class is a structured period of time where learning is
              intended to occure. it involves one or more students being taught.
            </h2>
            <lottie-player
              id={"secondlottie"}
              autoplay
              loop
              mode="normal"
              src="https://assets8.lottiefiles.com/packages/lf20_gomzks5q.json"
            ></lottie-player>
          </div>

        </section>
        <section className="course-section">
          <h1 className="price-title">
            Popular courses and tutorials.
          </h1>
          <p className="price-description">
            Choose from a selection of our most popular courses that are easy
            to follow and include great interactive learning activities.
          </p>
          <div className="price-section">
            <div className="SB">
              <h2>Student/Budget<br></br>R25/Month</h2>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span> Mentorship Group Sessions
              </p>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Career Incubator
              </p>
              <p className="inactive-sb">Mentor One-on-One</p>
              <p className="inactive-sb">Skills Workshop</p>
              <p className="inactive-sb">Skills Tutorial</p>
              <p className="inactive-sb">Networking and pitch Events</p>
            </div>
            <div className="BP">
              <h2>Budget Pro<br></br>R55/Month</h2>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span> Mentorship Group Sessions
              </p>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Career Incubator
              </p>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Mentor One-on-One
              </p>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Skills Workshop
              </p>
              <p className="inactive-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Skills Tutorial
              </p>
              <p className="inactive-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Networking and pitch Events
              </p>
            </div>
            <div className="PP">
              <h2>Premium<br></br>R105/Month</h2>
              <h2>Student/Budget<br></br>R25/Month</h2>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span> Mentorship Group Sessions
              </p>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Career Incubator
              </p>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Mentor One-on-One
              </p>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Skills Workshop
              </p>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Skills Tutorial
              </p>
              <p className="active-sb">
                <svg xmlns="http://www.w3.org/2000/svg" position="absolute" width="16" height="16" fill="#F4AC1E" margin="20px" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <span></span>
                Networking and pitch Events
              </p>
            </div>
          </div>

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
          {/* <footer className="footer bg-dark p-3 text-center " data-testid="footer">
            <div className="social-links-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>

            </div>
            <div className="links-section"

            >

              <ul className="ul-1">
                <li>Support</li>
                <li>Blog</li>
                <li>Press</li>
              </ul>

              <ul className="ul-2">
                <li>About</li>
                <li>Careers</li>
                <li>FAQ</li>
              </ul>

              <ul className="ul-3">
                <li>Privacy</li>
                <li>Terms</li>
                <li>More</li>
              </ul>

              <p data-testid="footer-text"
                style={{
                  fontSize: "12px",
                  color: "grey",
                  top: "80%",
                  position: "absolute"
                }}
              >

                2021 iCultivate. All rights reserved.
              </p></div>
            <div className="links-section-2">
            </div>
          </footer> */}
        </section>
      </div>
    </>
  )
};

