import React from 'react';

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="toptext">SPEED UP YOUR BUSINESS</h1>
      <div className="heroimg">
        <amp-img
          src="/computer.svg"
          width="600"
          height="500"
          layout="responsive"
          alt="heroimg"
        ></amp-img>
      </div>
      <div className="herotext">
        <h2>Soluzioni e assistenza web e hardware </h2>
        <p>
          Progettazione e sviluppo siti web, e-commerce, Digital Stratedy, Brand
          Identity, manutenzione e supporto.
        </p>
      </div>

      <style jsx>{`
        .toptext {
          padding-top: 1rem;
          color: white;
          font-size: 1.5rem;
        }
        .herotext {
          background: white;
          margin: 0.5rem auto;
          width: 98%;
        }
        h1 {
          padding: 0;
          margin: 0;
          text-align: center;
          font-size: 1.4rem;
        }
        h2 {
          padding: 0;
          margin: 0;
          text-align: center;
          font-size: 1.2rem;
        }
        p {
          padding: 0;
          margin: 0;
          text-align: center;
          font-size: 1rem;
        }
        @media only screen and (min-width: 769px) {
          .hero {
            padding: 3rem 0;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
          }

          .toptext {
            grid-area: 1 / 1 / 2 / 3;
            font-size: 3rem;
            align-self: end;
          }
          .herotext {
            grid-area: 2 / 1 / 3 / 3;
            background: none;
            padding-top: 2rem;
          }
          h2,
          p {
            font-size: 1.4rem;
          }
          .heroimg {
            grid-area: 1 / 3 / 3 / 6;
          }
          img {
          }
        }
      `}</style>
    </div>
  );
}
