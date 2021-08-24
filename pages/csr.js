import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Tabs from "../components/Tabs"; 
import Branding from '../components/courses_categories/branding_category/branding';


export default withPageAuthRequired(function SSRPage() {
  return (
    <>
      <div className="mb-5" data-testid="csr">
        <h1 data-testid="csr-title">Browse Courses</h1>
        <div data-testid="csr-classes"
   
       >
        <Tabs> 
       <div label="Branding"> 
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
      </div>
    </>
  );
});
