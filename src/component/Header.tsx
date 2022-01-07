import React from "react";
import Logo from '../images/strava_logo_nav.png';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <span className="strava-logo">
                            <img src={Logo} alt="Strava"/>
                        </span>
                        <span className="strava-subbranding">Developers</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}