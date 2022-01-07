import React from "react";

export default function Footer() {
    return (
        <footer className="section footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Agreement &amp; Brand Guidelines</h2>
                        <p>
                            To use the Strava API, you need to comply with the Strava API Agreement and our Brand
                            Guidelines. Mandatory logos, linking, and attribution rules can also be found in the
                            guidelines.
                        </p>
                        <ul className="list-links">
                            <li>
                                <a href="https://www.strava.com/legal/api">Strava API Agreement</a>
                            </li>
                            <li>
                                <a href="/guidelines">Strava Brand Guidelines</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h2>Strava Engineering</h2>
                        <p>
                            Learn more about the Strava Engineering Team and all the cool things we're working on.
                        </p>
                        <ul className="list-links">
                            <li>
                                <a href="https://medium.com/strava-engineering">Strava Engineering Blog</a>
                            </li>
                            <li>
                                <a href="https://boards.greenhouse.io/strava">Careers at Strava</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h2>Mailing List</h2>
                        <p>
                            Join the Strava API discussion group to ask questions and hear from other API
                            developers. Remember, <b>never</b> share access tokens, refresh tokens, authorization
                            codes, or your client secret in a public forum.
                        </p>
                        <ul className="list-links">
                            <li>
                                <a href="https://groups.google.com/forum/#!forum/strava-api">Join the Strava
                                    Developer Group</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}