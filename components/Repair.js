import React from 'react';

export default function Repair() {
  return (
    <div className="servizi">
      <div className="speedimg">
        <amp-img
          src="/repair2.svg"
          width="550"
          height="250"
          layout="responsive"
        ></amp-img>
      </div>
      <div className="speedtext">
        <h3>Riparazione e Assistenza PC e portatili</h3>
        <p>Upgrade dei componenti per una maggiore velocità</p>
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
