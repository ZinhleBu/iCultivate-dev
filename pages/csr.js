import React from 'react';
import Tabs from "../components/Tabs"; 
import HoverRating from "../components/HoverRating";
import Grid from '@material-ui/core/Grid';

import Branding from '../components/courses_categories/branding_category/branding';
import Footer from '../components/Footer';
import { Container } from '@material-ui/core';

export default function SSRPage() {
  return (
    <>
      <div className="mb-5" data-testid="csr">
        <h1 data-testid="csr-title">Browse Courses</h1>
        <div data-testid="csr-classes"
       >
        <Tabs> 
       <Container label="Branding"> 


         <Grid >
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
            </Grid>
          </Container> 
       <div label="Design"> 
         After 'while, <em>Crocodile</em>! 
       </div> 
       <div label="Photography"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Health"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Development"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Math"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </Tabs> 
        </div>
      </div>
    </>
  );
};
