import React, { useRef } from "react";
export default function Branding() {

    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    const categoryImg = (props) => {
        const styling = {
            backgroundImage: `url('./slidebean-p2E8RQDZ-Zg-unsplash.jpg')`,
            width: "100%",
            height: "100%"
        }
    }
    return (




        <div className="category-container">
            <ul className="category-ul">
                <li className="category-card">
                    <a href="/cultivateYourSideHustle" className="category-item">

                        <div className="categoryImg-1"></div>
                        <h1 className="category-title">
Cultivating your side hustle                        </h1>
                        <p className="course-owner">
                        Kimberly Bediako                        </p>
                        <p className="rating"></p>
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
    )
};
