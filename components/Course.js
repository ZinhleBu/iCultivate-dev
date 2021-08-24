import React, { useRef } from "react";
export default function Course() {

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
                        <a href="/coleSteele" className="category-item">

                            <div className="categoryImg-1"></div>
                            <h1 className="category-title">
                                The complete brand strategy course
                            </h1>
                            <p className="course-owner">
                                Colt Steele
                            </p>
                            <p className="rating">rating</p>
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
            
            .category-card {
                min-width: 250px;
                max-width: 300px;
                height: 450px;
                margin: 20px;
                position: relative;
                box-shadow: 10px 22px 52px 4px rgba(0,0,0,0.12);            
                border: #F55353;
                border-radius:20px;
                transition: .4s all cubic-bezier(.74, .22, .43, .95);
            }

                .category-card:hover {
                    color: #f5ad1d;
                    box-shadow: 10px 22px 52px 4px rgba(0,0,0,0.22);            
                    border: #F55353;
                    transform: scale(1.1);
                }

        .category-item {
            width: 100%;
            background: #ffffff;
            border-radius: 20px;
            height: 100%;
            left: 0;
            transition: .4s all cubic-bezier(.74, .22, .43, .95);
        }
        .categoryImg-1 {
            width: 100%;
            height: 50%;
            background: url('./slidebean-p2E8RQDZ-Zg-unsplash.jpg');
            background-size: cover;
            border-radius: 20px 20px 0 0;
            position: absolute;

            
        }
        .categoryImg-2 {
            width: 100%;
            height: 50%;
            background: url('./balazs-ketyi-_x335IZXxfc-unsplash.jpg');
            background-size: cover;
            border-radius: 20px 20px 0 0;
            position: absolute;

            
        }
        .categoryImg-3 {
            width: 100%;
            height: 50%;
            background: url('./reinhart-julian-WxM465oM4j4-unsplash.jpg');
            background-size: cover;
            border-radius: 20px 20px 0 0;
            position: absolute;
        }
        .categoryImg-4 {
            width: 100%;
            height: 50%;
            background: url('./ferenc-almasi-eYpcLDXHVb0-unsplash.jpg');
            background-size: cover;
            border-radius: 20px 20px 0 0;
            position: absolute;
        }

        .categoryImg-5 {
            width: 100%;
            height: 50%;
            background: url('./charisse-kenion-hd41GESb3ZY-unsplash.jpg');
            background-size: cover;
            border-radius: 20px 20px 0 0;
            position: absolute;
        }

        .categoryImg-6 {
            width: 100%;
            height: 50%;
            background: url('./jakob-owens-CiUR8zISX60-unsplash.jpg');
            background-size: cover;
            border-radius: 20px 20px 0 0;
            position: absolute;
        }

        .categoryImg-7 {
            width: 100%;
            height: 50%;
            background: url('./charisse-kenion-hd41GESb3ZY-unsplash.jpg');
            background-size: cover;
            border-radius: 20px 20px 0 0;
            position: absolute;
        }

        .categoryImg-8 {
            width: 100%;
            height: 50%;
            background: url('./charisse-kenion-hd41GESb3ZY-unsplash.jpg');
            background-size: cover;
            border-radius: 20px 20px 0 0;
            position: absolute;
        }
            .category-title {
                position: absolute;
                font-size: 1.5rem;
                top: 60%;
                width: 80%;
                left: 10%;
                color: #000000;
                transition: .4s all cubic-bezier(.74, .22, .43, .95);
            }
                .category-title:hover {
                    color: #f5ad1d;
                }
                .course-owner {
                    position: absolute;
                    font-size: 1rem;
                    top: 89%;
                    left: 10%;
                    color: #000000;
                    transition: .4s all cubic-bezier(.74, .22, .43, .95);
                    
                }
                
                .course-price {
                    position: absolute;
                    font-size: 2rem;
                    top: 80%;
                    left: 10%;
                    color: #000000;
                    transition: .4s all cubic-bezier(.74, .22, .43, .95);
                }
               
            }
        `}</style>

            <style jsx global>{`

            `}</style>

        </div>

    )

};
