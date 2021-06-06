import React from 'react';

export default function Hero() {
  return (
    <div>
      <h1 className="toptext">UPGRADE YOUR BUSINESS</h1>
      <div className="heroimg">
        <amp-img
          src="/computer.svg"
          width="500"
          height="300"
          layout="responsive"
        ></amp-img>
        <div className="herotext">
          <h2>Soluzioni e assistenza web e hardware </h2>
        </div>
      </div>
      <style jsx>{`
        .toptext {
          padding-top: 1rem;
        }
        h1,
        h2,
        p {
          padding: 0;
          margin: 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
