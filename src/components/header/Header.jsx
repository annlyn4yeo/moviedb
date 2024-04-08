import React, { useRef } from "react";
import "./Header.scss";
import logo from "../../assets/tmovie.png";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movies",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

export default function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="" />
          <Link to="/">MovieDb</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((element, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={element.path}>{element.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
