import React from 'react';
import Layout from '../components/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.scss';
import '../styles/Content.scss';
import '../styles/Course.scss';




initFontAwesome();

export default function App({ Component, pageProps }) {
  return (
  
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
