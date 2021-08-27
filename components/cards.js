import React, { useRef } from "react";

export default function Cards() {

    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

    return (


       
         
            <><p className="browse-description">
            Choose from a selection of our most popular courses that have helped students
            throughout the globe to reach their fullest potential.
        </p><div className="category-container">
                <ul className="category-ul">
                    <li className="category-card">
                        <a href="/brand" className="category-item">

                            <lottie-player
                                autoplay
                                loop
                                mode="normal"
                                src="https://assets4.lottiefiles.com/packages/lf20_ihyufeyo.json"
                                style={{ width: "130px", height: "130px", left: "30%", position: "absolute", top: "0%" }}
                            ></lottie-player>
                            <h1 className="category-title">
                                Branding
                            </h1>
                            <p className="course-number">
                                8 Courses
                            </p>
                        </a></li>
                    <li className="category-card"><a href="/design" className="category-item">

                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets2.lottiefiles.com/packages/lf20_n9cqez8k.json"
                            style={{ width: "130px", height: "130px", left: "30%", position: "absolute", top: "0%" }}
                        ></lottie-player>

                        <h1 className="category-title">
                            Design
                        </h1>
                        <p className="course-number">
                            6 Courses
                        </p>
                    </a></li>
                    <li className="category-card"><a href="/photography" className="category-item">
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets10.lottiefiles.com/packages/lf20_c3zlgy9r.json"
                            style={{ width: "130px", height: "130px", left: "30%", position: "absolute", top: "0%" }}
                        ></lottie-player>

                        <h1 className="category-title">
                            Photography
                        </h1>
                        <p className="course-number">
                            5 Courses
                        </p>
                    </a></li>
                    <li className="category-card"><a href="/develpoment" className="category-item">
                        <h1 className="category-title">
                            Development
                        </h1>
                        <p className="course-number">
                            2 Courses
                        </p>
                    </a></li>
                    <li className="category-card"><a href="/health" className="category-item">
                        <h1 className="category-title">
                            Printing
                        </h1>
                        <p className="course-number">
                            9 Courses
                        </p>
                    </a></li>
                    <li className="category-card"><a href="/math" className="category-item">
                        <h1 className="category-title">
                            Video
                        </h1>
                        <p className="course-number">
                            8 Courses
                        </p>
                    </a></li>
                </ul>

            </div></>
         
            
    

          )
        
        };
