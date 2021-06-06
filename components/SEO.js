import React from 'react';

export default function SEO() {
  return (
    <div className="SEO">
      <h2>Porta il tuo business al primo posto</h2>
      <amp-img
        src="/seo.svg"
        width="400"
        height="100"
        layout="responsive"
      ></amp-img>
      <p>
        Grazie alla loro velocità e soluzioni SEO, i nostri siti vengono
        posizionati sempre in cima nei motori di ricerca
      </p>
      <style jsx>{`
        .SEO {
          margin: 1rem 0;
          background: white;
        }
        h2,
        p {
          text-align: center;
        }
        p {
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
