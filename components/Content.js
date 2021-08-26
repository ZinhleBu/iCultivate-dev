import React, { useRef } from "react";
import Link from 'next/link';
import Cards from '../components/cards';
import Footer from './Footer';
import Course from './Course';
import Button from '@material-ui/core/Button';
import ComplexGrid from "./ComplexGrid";

export default function Content() {

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });


  return (

    <div className="next-steps my-5" >
      <div className="container" data-testid="content-items">
        <h1 className="title" data-testid="title">iDream, iCan, iCultivate
        </h1>
        <h2 className="description">
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
          style={{ width: "400px", height: "400px", left: "60%", position: "absolute", top: "30%" }}
        ></lottie-player>

        <section className="info-section">
          <h1 className="info-title">
            Over 500+ courses to choose from.
          </h1>
          <Cards />
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
          </div>
          <div className="inner-section-2">
            <lottie-player
              id={"secondlottie"}
              autoplay
              loop
              mode="normal"
              src="https://assets8.lottiefiles.com/packages/lf20_gomzks5q.json"
              style={{ width: "600px", height: "600px", left: "0%", position: "absolute", top: "0%" }}
            ></lottie-player>
          </div>
        </section>
        <section className="course-section">
          <h1 className="courses-title">
            Popular Courses.
          </h1>
          <Course
          />
         
        </section>
        <section className="instructor-sec bg-dark">

        <lottie-player
          id={"thirdlottie"}
          autoplay
          loop
          mode="normal"
          src="https://assets6.lottiefiles.com/packages/lf20_wepuwkno.json"
          style={{ width: "400px", height: "400px", left: "20%", position: "absolute", top: "0%" }}
        ></lottie-player>
          {/* <img
            className="inst-img"
            src="reinhart-julian-WxM465oM4j4-unsplash.jpg"
            style={{
              height:"70%", position: "relative", left: "10%",
              top: "0", 
            }}
          ></img> */}
          <div className="inst-info">
          <h1 
         >Become an instructor</h1>
          <p>Join the thousands of people who share their skills</p>
          <button className="btn-instructor ">
          <Link
            href={{
              pathname: '/ssr',
            }}
          >
            <a className="span" href="./pricing.js">Get started</a>
          </Link>
        </button>
          </div>

        </section>
        <Footer />

        <style jsx>{`
          .container {
            width: 100%;
            height: 100%;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            left: 10%;
            top: 30%;
            width: 500px;
            position: absolute;
            color: #f5ad1d;

          }

          .title,
          .description {
            text-align: left;
          }

          .description {
            line-height: 1.5;
            width: 30%;
            font-size: 1.5rem;
            font-weight: 300;
            position: absolute;
            top:55%;
            left: 10%;
          }

          .btn a {
            position: absolute;
            left: 10%;
            top: 70%;
            height: 50px;
            padding-top: 15px;
            text-decoration: none;
            color: #000000;
            width: 150px;
            background: transparent;
            border-radius: 25px;
            border: 2px solid #000000;
            transition: .3s all cubic-bezier(.74,.22,.43,.95);
          }
          .btn a:hover {
            background: #f5ad1d;
            color: #ffffff;
            box-shadow: 10px 22px 52px 4px rgba(0,0,0,0.32);            border: #F55353;


          }
          .btn-get-started  {
            position: absolute;
            left: 10%;
            top: 70%;
            height: 50px;
            padding-top: 8px;
            text-decoration: none;
            color: #000000;
            width: 150px;
            background: transparent;
            border-radius: 25px;
            border: 1px solid #000000;
            transition: .3s all cubic-bezier(.74,.22,.43,.95);
          }
          .btn-get-started a {
           
            text-decoration: none;
            color: #000000;
            width: 150px;
            background: transparent;
           
            transition: .3s all cubic-bezier(.74,.22,.43,.95);
          }
          .btn-get-started:hover {
            background: #f5ad1d;
            color: #ffffff;
            box-shadow: 10px 22px 52px 4px rgba(0,0,0,0.32);            
            border: #f5ad1d;
          }
          .btn-instructor {
            position: relative;
            left: 0%;
            top: 20%;
            height: 50px;
            padding-top: 8px;
            text-decoration: none;
            color: #000000;
            width: 150px;
            background: transparent;
            border-radius: 25px;
            border: 1px solid #000000;
            transition: .3s all cubic-bezier(.74,.22,.43,.95);
          }
          .btn-instructor a {
           
            text-decoration: none;
            color: #000000;
            width: 150px;
            background: transparent;
           
            transition: .3s all cubic-bezier(.74,.22,.43,.95);
          }
          .btn-instructor:hover {
            background: #f5ad1d;
            color: #ffffff;
            box-shadow: 10px 22px 52px 4px rgba(0,0,0,0.32);            
            border: #f5ad1d;
          }
          .tick-1{
            position: absolute;
            left: 10%;
            top: 77%;
          }
          .tick-2{
            position: absolute;
            left: 10%;
            top: 80%;
          }
          .btn-login {
            position: absolute;
            left:90%
          }
         

          .info-section {
            width: 100vw;
            height: 100vh;
            position absolute;
            top: 100vh;
            align-content: centre;
          }
          .banner-strip {
            width: 100vw;
            height:20vh;
            background: #f5ad1d;
            position: absolute;
            top: 210vh;
          }
          .how-to-section {
            width: 80vw;
            height: 100vh;
            position relative;
            top: 220vh;
            display: flex;
            align-content: centre;
          }
          .inner-section-1{
            position: absolute;
            width: 500px;
            justify-content: space-around;
            height: 500px;
            left: 60%;
          }
          .how-to-heading
          {
            font-size: 30px;
            color: #f5ad1d;
            text-align: left;
          }
          
          .how-to-title {
            text-align: left;
            width:350px;
          }

          .how-to-info {
            line-height: 1.5;
            width: 100%;
            font-size: 1.5rem;
            font-weight: 300;
            margin-top: 10px;
            position: absolute;
          }
          .course-section {
            width: 100vw;
            height: 100vh;
            position absolute;
            top: 320vh;
            align-content: centre;
          }
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }

          .courses-title {
            font-size: 3rem;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
          }
          .info-title {
            font-size: 3rem;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        .instructor-sec {
          width: 100vw;
          height:50vh;
          position: relative;
          top: 340vh;
          display: flex;
          
        }
         .inst-info {
           width: 500px;
           justify-content:left;
           text-align: left;
           position: relative;
           left: 50%;
         }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>


    </div>
  )
};

