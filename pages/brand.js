import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Tabs from "../components/Tabs";
import Branding from '../components/courses_categories/branding_category/branding';
import Link from 'next/link';


export default function brandingCategoryPage({ user }) {
  return (
    <div className="container" data-testid="csr">


      <div className="mb-5" data-testid="csr">
        <h1 data-testid="csr-title">Branding Courses</h1>
        <div data-testid="csr-classes">
          <Tabs>
            <div label="Branding">
              <Branding />
            </div>
            <div label="Identity Design">
              After 'while, <em>Crocodile</em>!
            </div>
            <div label="Marketing">
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
            <div label="Advertising">
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
            <div label="Copy Writing">
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
            <div label="Packaging">
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
