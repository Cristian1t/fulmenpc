import React from 'react';

export default function Servizi() {
  return (
    <div className="servizi">
      <div className="speedimg">
        <amp-img
          src="/speed.svg"
          width="550"
          height="250"
          layout="responsive"
          alt="servizi"
        ></amp-img>
      </div>
      <div className="speedtext">
        <h3>
          Creazione siti internet ultra-veloci, usando technologie come{' '}
          <strong>AMP</strong> e <strong>NextJS</strong>
        </h3>
        <p>Su mobile velocità di caricamento minori di 1 secondo</p>
      </div>
      <style jsx>{`
        .servizi {
          font-family: Nunito;
          background: white;
          margin: 1rem auto;
          width: 85%;
          border-radius: 1rem;
          padding: 0.5rem;
        }
        .speedtext {
          text-align: center;
        }
        .speedtext p {
          font-size: 1rem;
          padding: 0;
          margin: 0;
        }
        h3 {
          font-size: 1.1rem;
          padding: 1rem 0;
          margin: 0;
        }
        @media only screen and (min-width: 769px) {
          .servizi {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 0.5fr 0.1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
          }
        }
      `}</style>
    </div>
  );
}
