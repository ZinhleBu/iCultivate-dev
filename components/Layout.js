import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';
import Footer from '../components/Footer';

import NavBar from './NavBar';

const Layout = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <title>iCultivate</title>
    </Head>
    <main id="app" className="d-flex flex-column w-100 " data-testid="layout">
      <NavBar />
      <Container className=" mt-5 " >{children}</Container>
    </main>
  </>
);

export default Layout;
