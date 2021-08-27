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
            This is just dummy text I placed here
            because i don’t want you to get bored.
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
          <div className="tick-1"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" margin="10px" width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z" /></svg>Skilled and experienced couches.</div>
          <div className="tick-2"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" margin="10px" width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z" /></svg>Supportive couching.</div>

          <lottie-player
            id={"firstlottie"}
            autoplay
            loop
            mode="normal"
            src="https://assets5.lottiefiles.com/packages/lf20_bpqri9y8.json"
          ></lottie-player>

          <section className="info-section">
            <h1 className="info-title">
              Over 500+ courses to choose from.
            </h1>
          </section>
        </section>
        <div className="banner-strip">
          <div className="banner-item"></div>
        </div>
        <section className="how-to-section">
          <div className="inner-section-1">
            <p className="how-to-heading">How to Start</p>
            <h1 className="how-to-title">
              A Very Simple Steps
              To Create Account And Start Learning.
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
            Popular Courses.
          </h1>
          <p className="browse-description">
            Choose from a selection of our most popular courses that have helped students
            throughout the globe to reach their fullest potential.
          </p>



          <div className="category-container">
            <ul className="category-ul">
              <li className="category-card">
                <a href="/coleSteele" className="category-item">

                  <div className="categoryImg-1"></div>
                  <h1 className="category-title">
                    The complete brand strategy course
                  </h1>
                  <p className="course-owner">
                    Colt Steele
                  </p>
                  <HoverRating />
                  <h2 className="course-price">R18</h2>
                </a></li>
              <li className="category-card"><a href="/design" className="category-item">

                <div className="categoryImg-2">

                </div>

                <h1 className="category-title">
                  Learn UI/UX the right way.
                </h1>
                <p className="course-owner">
                  Simphiwe Dana
                </p>
                <HoverRating />
                <h2 className="course-price">R35</h2>
              </a></li>
              <li className="category-card"><a href="/photography" className="category-item">
                <div className="categoryImg-3">
                </div>
                <h1 className="category-title">
                  Beautiful Photography course.
                </h1>
                <p className="course-owner">
                  Brad Pitt
                </p>
                <HoverRating />
                <h2 className="course-price">R24</h2>
              </a></li>
              <li className="category-card"><a href="/develpoment" className="category-item">
                <div className="categoryImg-4">
                </div>
                <h1 className="category-title">
                  The best Web Development course
                </h1>
                <p className="course-owner">
                  2 Courses
                </p>
                <HoverRating />
                <h2 className="course-price">R58</h2>
              </a></li>
              <li className="category-card"><a href="/health" className="category-item">
                <div className="categoryImg-5">

                </div>
                <h1 className="category-title">
                  Printing
                </h1>
                <p className="course-owner">
                  9 Courses
                </p>
                <HoverRating />
                <h2 className="course-price">R17</h2>
              </a></li>
              <li className="category-card"><a href="/math" className="category-item">
                <div className="categoryImg-6">

                </div>
                <h1 className="category-title">
                  Video
                </h1>
                <p className="course-owner">
                  8 Courses
                </p>
                <HoverRating />
                <h2 className="course-price">R68</h2>
              </a></li>
              <li className="category-card"><a href="/health" className="category-item">
                <div className="categoryImg-7">

                </div>
                <h1 className="category-title">
                  Best Health and Fitness course.
                </h1>
                <p className="course-owner">
                  9 Courses
                </p>
                <HoverRating />
                <h2 className="course-price">R72</h2>
              </a>
              </li>
              <li className="category-card"><a href="/math" className="category-item">
                <div className="categoryImg-8">
                </div>
                <h1 className="category-title">
                  Video
                </h1>
                <p className="course-owner">
                  8 Courses
                </p>
                <HoverRating />
                <h2 className="course-price">
                  R40
                </h2>
              </a>
              </li>
            </ul>
          </div>
        </section>

       
      </div>
    </>
  )
};

