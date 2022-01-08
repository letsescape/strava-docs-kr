import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

import Logo from "../images/strava_logo_nav.png";
import test from "../markdown/test.md";

export default function Header() {
    useEffect(() => {
        axios(test).then(data => console.log(data.data));
    })

    return (
        <header>
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
        </header>
    );
}