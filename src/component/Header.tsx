import React from "react";
import {Link} from "react-router-dom";

import Logo from "../images/strava_logo_nav.png";

export default function Header() {
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand"
        >
                        <span className="strava-logo">
                            <img src={Logo} alt="Strava"/>
                        </span>
          <span className="strava-subbranding">Developers</span>
        </Link>
      </div>
    </nav>
  );
}