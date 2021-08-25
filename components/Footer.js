import React from 'react';

const Footer = () => (
  <><footer className="footer bg-dark p-3 text-center h-30 w-100"data-testid="footer">
    <div className="logo" data-testid="footer-logo" />
    <p data-testid="footer-text">

    </p>
  </footer><style jsx>{`
     .footer {
       top: 450vh;
       width: 100vw;
       position: absolute;
     }
 `}</style></>

);

export default Footer;
