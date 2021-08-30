import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Highlight from '../components/Highlight';

export default function External() {

  return (
    <div className="mb-5" data-testid="external">
      <h1 data-testid="external-title">Contact Us</h1>
      <div data-testid="external-text">
        <p className="lead">
          Have any Questions? We'd love to hear from you.
        </p>
        <Button
          variant="contained"
          color="primart"
          className="mt-5"
          style={{top:"500px", left:"40px",position:"relative", zIndex:"2"}}
        >Visit Press Page</Button>
      </div>
      <div className="contact-section">
        <div className="press">
          <h2>Press</h2>
          <p className="inactive-sb">
            Are you interested in our latest Courses,
            need to get in touch with us?</p>

        </div>
        <div className="support">
          <h2>Help and Support</h2>
          <p className="inactive-sb">If you need any help dont hesitate to give us a call or email us.</p>

        </div>
        <div className="sales">
          <h2>Sales</h2>
          <p className="inactive-sb">
            Get in touch with our team to see how we can work together.
          </p>

        </div>
      </div>
    </div>
  );
}


