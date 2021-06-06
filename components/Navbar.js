import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logoimg">
          <amp-img
            src="/fulmine.svg"
            width="30"
            height="40"
            layout="responsive"
          ></amp-img>
        </div>
        FulmenPC
      </div>
      <Hamburger />
      <ul className="linkmenu">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <style jsx>{`
        .navbar {
          width: 100%;
          background: white;
          display: flex;
        }
        .logo {
          color: black;
          width: 100%;
          font-size: 2rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          padding-left: 1rem;
        }
        .logoimg {
          width: 1.8rem;
        }
        .linkmenu {
          margin: 0;
          padding: 0;
          width: 100%;
          display: none;
          list-style: none;
          justify-content: space-evenly;
          font-size: 2rem;
          cursor: pointer;
        }
        li {
          padding: 0.5rem;
        }
        li :hover {
          color: red;
        }
        @media only screen and (min-width: 769px) {
          .linkmenu {
            display: flex;
          }
          .logo {
            font-size: 3rem;
          }
          .logoimg {
            width: 2.5rem;
          }
      `}</style>
    </div>
  );
}
