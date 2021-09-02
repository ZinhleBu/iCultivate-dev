import React from 'react';
import Layout from '../components/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.scss';
import '../styles/Content.scss';
import '../styles/Contact.scss';
import '../styles/coleSteele.scss';
import '../styles/Course.scss';
import '../styles/cards.scss';
import '../styles/about.scss';





initFontAwesome();

export default function App({ Component, pageProps }) {
  return (
  
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
