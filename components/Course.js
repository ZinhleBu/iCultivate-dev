import React, { useRef } from "react";
import HoverRating from "../components/HoverRating";
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

export default function Course() {

    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
   
    return (



            <><Container fullWidth className="category-container">
                <ul className="category-ul">
                    <li className="category-card">
                        <a href="/coleSteele" className="category-item">

                            <div className="categoryImg-1"></div>
                            <h1 className="category-title">
                                Cultivating your side hustle
                            </h1>
                            <p className="course-owner">
                                Kim
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
                    </a></li>
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
                        <h2 className="course-price">R40</h2>
                    </a></li>

                </ul>
                
            </Container></>

           

       
    )

};
