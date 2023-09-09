import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import TestCTAHome from '../components/TestCTAHome';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';
import Script from 'next/script';
import '../styles/globals.css';
import '../styles/Navbar.css';
import '../styles/headerHome.css';
import '../styles/homeArticlesList.css';
import '../styles/testCTAHome.css';
import '../styles/footer.css';
import '../styles/newsletterSignup.css';
import '../styles/articles/articlesCss.css';
import '../styles/articles/suggestedArticles.css';
import '../styles/goUpComponent.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <html lang="fr" />
        <title>Blog de Basile, 1er simulateur de création d'entreprise au monde</title>
        <meta name="description" content="Blog de Basile, 1er simulateur de création d'entreprise au monde. Des conseils, interviews et décryptages, par et pour les entrepreneurs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="blog, basile, simulateur, création, entreprise, conseils, interviews, décryptages, entrepreneurs, podcast, IA, intelligence, artificielle, entrepreneur, entrepreneuriat" />
        <meta name="author" content="Basile" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://www.hellobasile.com/" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Blog de Basile" />
        <meta property="og:description" content="Blog de Basile, 1er simulateur de création d'entreprise au monde. Des conseils, interviews et décryptages, par et pour les entrepreneurs." />
        <meta property="og:image" content="https://res.cloudinary.com/dvzsvgucq/image/upload/v1688319003/0_3_z69gcb.png" />
        <meta property="og:url" content="https://blog.hellobasile.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog de Basile" />
        <meta name="twitter:description" content="Blog de Basile, 1er simulateur de création d'entreprise au monde. Des conseils, interviews et décryptages, par et pour les entrepreneurs." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dvzsvgucq/image/upload/v1688319003/0_3_z69gcb.png" />

        <Script dangerouslySetInnerHTML={{__html:`
                      (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:3640439,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}}
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <NewsletterSignup />
      <TestCTAHome />
      <Footer />
    </div>
  )
}

export default MyApp;
