import React from 'react';
import Link from 'next/link';


export default function SSRPage() {

  return (
    <>
      <div className="backDrop"></div>
      <div className="mb-5" data-testid="csr">
        <h1 data-testid="csr-title"
          style={{
            color: "#ffffff",
            fontSize: "50px",
            width: "40%"
          }}>
          The complete brand strategy course
        </h1>
        <div data-testid="csr-classes">
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
      <style jsx>{`

  .starRatings {
    width: 100px;
    height: 20px;
    position: relative;
    left: 0;
    display: flex;
    
    top: 5%;
    margin-top: 10px;

  }
  .starItem {
    width: 20px;
    background: url('./star.png');
    background-size: cover;  
  }

  p{
    position: relative;
    top: 5px;
    margin-bottom: 15px;
    color: grey;
  }
    .btn-get-started  {
      position: relative;
      left: 0%;
      top: 30%;
      height: 50px;
      padding-top: 8px;
      text-decoration: none;
      color: #ffffff;
      width: 150px;
      background: transparent;
      border-radius: 25px;
      border: 1px solid #ffffff;
      transition: .3s all cubic-bezier(.74,.22,.43,.95);
    }
    .btn-get-started a {
     
      text-decoration: none;
      color: #ffffff;
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
    .btn-share  {
      position: relative;
      left: 0;
      top: 30%;
      height: 50px;
      margin-left: 20px;
      padding-top: 8px;
      text-decoration: none;
      color: #ffffff;
      width: 150px;
      background: transparent;
      border-radius: 25px;
      border: 1px solid #ffffff;
      transition: .3s all cubic-bezier(.74,.22,.43,.95);
    }
    .btn-share a {
     
      text-decoration: none;
      color: #ffffff;
      width: 150px;
      background: transparent;
      transition: .3s all cubic-bezier(.74,.22,.43,.95);
    }
    .btn-share:hover {
      background: #f5ad1d;
      color: #ffffff;
      box-shadow: 10px 22px 52px 4px rgba(0,0,0,0.32);            
      border: #f5ad1d;
    }
    
   
  `}</style>
    </>

  );
};
