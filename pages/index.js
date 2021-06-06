import Head from 'next/head';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import RestSite from '../components/RestSite';

export const config = {
  amp: true,
};

export default function IndexPage() {
  return (
    <div className="index">
      <Head>
        <title>FulmenPC</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito"
        />
      </Head>
      <Navbar />
      <Hero />
      <RestSite />
      <SEO />
      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        h1 {
          font-size: 5.9vw;
        }
        h2 {
          font-size: 3vh;
        }
        p {
          font-size: 2vmin;
        }
        .index {
          background: linear-gradient(
              179.4deg,
              rgba(33, 150, 243, 1) 1.8%,
              rgba(22, 255, 245, 0.6) 97.1%
            )
            no-repeat;
          display: grid;
          grid-template-rows: auto auto auto;
          font-family: 'Nunito';
        }
      `}</style>
    </div>
  );
}
