import React, { useRef } from "react";

export default function Cards() {

    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

    return (


        <div className="info-section">
         
            <p className="browse-description">
                Choose from a selection of our most popular courses that have helped students
                throughout the globe to reach their fullest potential.
            </p>
            <div className="category-container">
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

            </div>

            <style jsx>{`
            
          .browse-description {
            line-height: 1.5;
            width: 30%;
            font-size: 1.5rem;
            font-weight: 300;
            position: absolute;
            top:15%;
            transform: translate(-50%, -50%);

            left: 50%;
          }
            .category-ul {
                list-style: none;
                width: 80%;
                height: 60%;
                position: absolute;
                left: 50%;
                top: 60%;
                transform: translate(-50%, -50%);
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr;
            }
            @media (max-width: 1200px) {
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
            }
            @media (max-width: 1000px) {
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
            }
            @media (max-width: 800px) {
            }
            @media (max-width: 600px) {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
            }
            .category-card {
                min-width: 300px;
                margin: 20px;
                position: relative;
                border-radius: 20px;
                height: 270px;
                box-shadow: -1px 5px 13px -2px rgba(135,135,135,0.9);            
                transition: .4s all cubic-bezier(.74, .22, .43, .95);
            }
                .category-card:hover {
                    color: #87D883;
                    transform: scale(1.1);
                }

        .category-item {
            width: 100%;
            border-radius: 20px;
            height: 100%;
            position: absolute;
            box-shadow: -1px 5px 13px -2px rgba(135,135,135,0.9);            
            transition: .4s all cubic-bezier(.74, .22, .43, .95);
        }
            .category-title {
                position: absolute;
                font-size: 1.5rem;
                top: 60%;
                left: 10%;
                color: #000000;
                transition: .4s all cubic-bezier(.74, .22, .43, .95);
            }
                .category-title:hover {
                    color: #87D883;
                }
                .course-number {
                    position: absolute;
                    font-size: 1rem;
                    top: 75%;
                    left: 10%;
                    color: #000000;
                    transition: .4s all cubic-bezier(.74, .22, .43, .95);
                    
                }
                .course-number :hover {
                    color: #87D883;
                }
                .course-number {
                    position: absolute;
                    font-size: 1rem;
                    top: 75%;
                    left: 10%;
                    color: #000000;
                    transition: .4s all cubic-bezier(.74, .22, .43, .95);
                }
                .course-number:hover {
                    color: #87D883;
                }
            }
        `}</style>

            <style jsx global>{`

            `}</style>

        </div>

          )
        
};
