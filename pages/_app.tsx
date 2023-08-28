import React from 'react';
import { SessionProvider as SessionProvider } from 'next-auth/react'
import Navbar from '../components/Navbar';
import TestCTAHome from '../components/TestCTAHome';
import Footer from '../components/Footer';
import '../styles/globals.css';
import '../styles/Navbar.css';
import '../styles/headerHome.css';
import '../styles/TestCTAHome.css';
import '../styles/footer.css';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
      <TestCTAHome />
      <Footer />
    </SessionProvider>
  )
}

export default MyApp;
