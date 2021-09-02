import React from 'react';
import Tabs from "../components/Tabs"; 
import HoverRating from "../components/HoverRating";
import Grid from '@material-ui/core/Grid';

import Branding from '../components/courses_categories/branding_category/branding';
import Footer from '../components/Footer';
import { Container } from '@material-ui/core';

export default function SSRPage() {
  return (
    <>
      <Container className="mb-5" data-testid="csr">
        <h1 data-testid="csr-title">Browse Courses</h1>
        <div data-testid="csr-classes"
       >
        <Tabs> 
       <div alignItems="center" label="Branding"> 
       <Branding />
       </div>
       <div label="Design"> 
         After 'while, <em>Crocodile</em>! 
       </div> 
       <div label="Photography"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Health"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Development"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Math"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </Tabs> 
        </div>

      </Container>
    </>
  );
};
