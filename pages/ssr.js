import React from 'react';
import Link from 'next/link';


export default function SSRPage() {
  return (
    <>
      <div className="container" data-testid="ssr">


        <main>

          <div className="container-pricing">
            <h1 data-testid="ssr-title">Pricing</h1>
            <p data-testid="ssr-text">Subscribe to get access to over 500
              online education courses.</p>
          </div>
          <div className="container-sub">
            <div className="sub-free">
              <h2>Free</h2>
              <p>All free features</p>
              <h3>R0</h3>
              <div className="btn btn-create-account">
                <Link
                  href={{
                    pathname: '/create-account',
                  }}
                >
                  <a className="span" href="./crete-account">Free</a>
                </Link>
              </div>
              <div className="pricing-info">
                <p className="pricing-info-item">
                  Mentorship Group Sessions
                </p>
                <p className="pricing-info-item">
                  Career Incubator
                </p>
              </div>
            </div>
            <div className="sub-basic">
              <h2>Basic</h2>
              <p>All Basic features</p>
              <h3>R15</h3>
              <div className="btn btn-create-account">
                <Link
                  href={{
                    pathname: '/create-account',
                  }}
                >
                  <a className="span" href="./crete-account">Buy</a>
                </Link>
              </div>
            </div>
            <div className="sub-pro">
              <h2>Pro</h2>
              <p>All Pro features</p>
              <h3>R49</h3>
              <div className="btn btn-create-account">
                <Link
                  href={{
                    pathname: '/create-account',
                  }}
                >
                  <a className="span" href="./crete-account">Buy</a>
                </Link>
              </div>
            </div>
            <div className="sub-teach"></div>


          </div>

        </main>



        <style jsx>{`
  .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  main {
    padding: 5rem 0;
    flex: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container-pricing {
    width: 100%;
    top: 25%;
    position: absolute;
    height: 10vh;
    margin-bottom: 10%;
    text-align: center;
  }
  .container-sub {
    display: flex;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 70%;
    width: 80%;
    height: 50%
  }
  .sub-free {
    min-height: 700px;
    min-width: 300px;
    margin-right:50px;
    border: 1px solid #f5ad1d;
    border-radius: 40px;
    justify-content: space-around;
    padding: 10px;
    position: relative;
    transition: all .3s ease-in-out;
    padding-top: 10%;
    padding-left: 3%;
  }
  .sub-free:hover {
    transform: scale(1.02);
    background: #f5ad1d;
    box-shadow: -1px 5px 13px -2px rgba(135,135,135,0.9);


  }
 
  .sub-basic {
    min-height: 700px;
    min-width: 300px;
    margin-right:50px;
    border: 1px solid #f5ad1d;
    border-radius: 40px;
    justify-content: space-around;
    padding: 10px;
    position: relative;
    transition: all .3s ease-in-out;
    padding-top: 10%;
    padding-left: 3%;
  }
  .sub-basic:hover {
    background: #f5ad1d;
    transform: scale(1.02);
    box-shadow: -1px 5px 13px -2px rgba(135,135,135,0.9);

  }

  .sub-pro {
    min-height: 700px;
    min-width: 300px;
    margin-right:50px;
    border: 1px solid #f5ad1d;
    border-radius: 40px;
    justify-content: space-around;
    padding: 10px;
    position: relative;
    transition: .3s all cubic-bezier(.74,.22,.43,.95);
    padding-top: 10%;
    padding-left: 3%;
  }
  .sub-pro:hover {
    transform: scale(1.02);
    background: #f5ad1d;
    box-shadow: -1px 5px 13px -2px rgba(135,135,135,0.9);

  }
  .sub-teach {
    min-height: 700px;
    min-width: 300px;
    margin-right:50px;
    border: 1px solid #f5ad1d;
    border-radius: 40px;
    justify-content: space-around;
    padding: 10px;
    position: relative;
    transform: scale (1);
    transition: .3s all cubic-bezier(.74,.22,.43,.95);
    padding-top: 10%;
    padding-left: 5%;
  }
  .sub-teach:hover {
    transform: scale(1.02);
    background: #f5ad1d;
    box-shadow: -1px 5px 13px -2px rgba(135,135,135,0.9);

  }
  h1 {
    position: relative;

    font-size: 3rem;
    margin: 0;
  }

  h2 {
    position: relative;

    font-size: 2rem;
    margin: 0;

  }

  h3 {
    position:relative;
    font-size: 3.5rem;
    margin: 10px;
    
  }

  .btn a {
    position: absolute;
    left: 10%;
    top: 60%;
    height: 50px;
    padding-top: 15px;
    text-decoration: none;
    text-align: center;
    color: #000000;
    width: 150px;
    background: transparent;
    border-radius: 25px;
    border: 2px solid #000000;
    transition: .3s all cubic-bezier(.74,.22,.43,.95);
  }
 .btn a:hover {
    background: #ffffff;
    color: #000000;
    box-shadow: -1px 5px 13px -2px rgba(135,135,135,0.9);
    border: #f5ad1d;
  }
  
  .pricing-info {
    display: flex;
    width:300px;
    height: 40%;
    flex-direction: column;
    left: 40%;
    position: relative;
    top:70%;
    transform: translate(-50%, -50%);

  }
  .pricing-info-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: 0px;
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
    </>
  );
}

