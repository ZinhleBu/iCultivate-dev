import React from 'react';
import Link from 'next/link';


export default function SSRPage() {

  return (
    <>
      <div className="backDrop"></div>
      <div className="mb-5" data-testid="csr">
        <div className="container-course-selected">
       
        <div className="csr-classes" data-testid="csr-classes">
        <h1 data-testid="csr-title"
          style={{
            color: "#000000",
            fontSize: "30px",
            width: "80%",
            position:"relative",
          }}>
          The complete brand strategy course
        </h1>
          <p style={{
            fontSize: "20px",
            color: "#ffffff",
            width: "40%"
          }}>Learn about brand strategy and many more skills related to branding and business.</p>
          <div className="tag-popular"
            style={{
              backgroundColor: "lightGreen",
              width: "70px",
              fontSize: "12px",
              textAlign: "center",
              position:"relative",
              borderRadius: "10px"
            }}>Popular</div>
          <div className="starRatings">
            <div className="starItem">
            </div>
            <div className="starItem">
            </div>
            <div className="starItem">
            </div>
            <div className="starItem">
            </div>
          </div>
          <p>Last updated 5/2021 English, Setswana, Afrikaans.</p>
          <button className="btn-get-started ">
            <Link
              href={{
                pathname: '/',
              }}
            >
              <a className="span" href="/">Wishlist</a>
            </Link>

          </button>
          <button className="btn-share ">
            <Link
              href={{
                pathname: '/',
              }}
            >
              <a className="span" href="/">Share</a>
            </Link>

          </button>

        </div>
        
        </div>
        <section className="other-course-sec"></section>
      </div>
     
    </>

  );
};
