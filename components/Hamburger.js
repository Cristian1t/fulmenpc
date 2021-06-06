import React from 'react';

export default function Hamburger() {
  return (
    <div className="hamburgerwrap">
      <div
        id="hamburger"
        tabindex="1"
        role="button"
        on="tap:hamburger.toggleClass(class='close'),nav-menu.toggleClass(class='active')"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="nav-menu">
        <ul
          className="nav-list"
          role="button"
          tabindex="1"
          on="tap:hamburger.toggleClass(class='close'),nav-menu.toggleClass(class='active')"
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Servizi</a>
          </li>
          <li>
            <a href="#">Info</a>
          </li>
          <li>
            <a href="#">Contatta</a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        #hamburger {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 4rem;
          height: 4rem;
          background: #fff;
          overflow: hidden;
          cursor: pointer;
        }
        #hamburger span {
          position: absolute;
          transform: translateY(-50%);
          width: 70%;
          height: 0.4rem;
          background: #262626;
          transition: 1s;
        }
        #hamburger span:nth-of-type(1) {
          top: 30%;
          left: 15%;
          transition-delay: 1s;
          opacity: 1;
        }
        #hamburger span:nth-of-type(2) {
          top: 50%;
          left: 15%;
          transition-delay: 0s;
        }
        #hamburger span:nth-of-type(3) {
          top: 70%;
          right: 15%;
          transition-delay: 1s;
          opacity: 1;
        }
        #hamburger.close span:nth-of-type(1) {
          left: 100%;
          transition-delay: 0s;
          opacity: 0;
        }
        #hamburger.close span:nth-of-type(2) {
          transform: translateY(-50%) rotate(405deg);
          transition-delay: 0.5s;
        }
        #hamburger.close span:nth-of-type(3) {
          right: 100%;
          transition-delay: 0s;
          opacity: 0;
        }

        #hamburger span:nth-of-type(2)::before {
          content: '';
          position: absolute;
          top: -150px;
          left: 0;
          width: 100%;
          height: 100%;
          background: #262626;
          transform: rotate(90deg);
          transition: 1s;
          transition-delay: 0.5s;
        }
        #hamburger.close span:nth-of-type(2)::before {
          top: 0;
          transition-delay: 1s;
        }
        #nav-menu {
          position: absolute;
          left: 0;
          width: 100%;
          transform: translateX(1000%);
          opacity: 0;
          z-index: 10;
          transition: transform 0.7s ease, opacity ease 0.2s;
        }

        #nav-menu.active {
          transform: translateX(0);
          transition: transform 0.7s ease, opacity ease 0.2s;
          opacity: 1;
          background-color: #eaeaea;
        }

        .nav-list {
          width: 100%;
          padding: 0;
          margin: 0;
          list-style-type: none;
          font-size: 1.5em;
          text-decoration: none;
        }
        .nav-list li {
          text-align: center;
          padding: 1rem 0;
        }
        .nav-list li a {
          text-decoration: none;
          color: inherit;
        }
        .nav-list li a :hover {
          color: blue;
        }
        @media only screen and (min-width: 769px) {
          #hamburger {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
