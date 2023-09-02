import React from 'react';
import Navbar from '../components/Navbar';
import TestCTAHome from '../components/TestCTAHome';
import Footer from '../components/Footer';
import '../styles/globals.css';
import '../styles/Navbar.css';
import '../styles/headerHome.css';
import '../styles/homeArticlesList.css';
import '../styles/testCTAHome.css';
import '../styles/footer.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <TestCTAHome />
      <Footer />
    </div>
  )
}

export default MyApp;
