import React from 'react';
import Servizi from './Servizi';
import Repair from './Repair';

export default function RestSite() {
  return (
    <div className="rest">
      <Servizi />
      <Repair />
      <style jsx>{`
        @media only screen and (min-width: 769px) {
          .rest {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
          }
        }
      `}</style>
    </div>
  );
}
