import React, { useRef } from "react";
import Link from 'next/link';
import Cards from '../components/cards';
import HoverRating from "../components/HoverRating";

import Footer from './Footer';
import Course from './Course';
import { Row } from 'reactstrap';
import Button from '@material-ui/core/Button';
import ComplexGrid from "./ComplexGrid";

export default function Content() {

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
            <div className="topics"></div>

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
          <h1 className="courses-title">
            Popular courses and tutorials.
          </h1>
          <p className="browse-description">
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


        </section>

      </div>

    </>
  )
};

