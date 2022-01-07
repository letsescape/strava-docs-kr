import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Intro() {
    return (
        <>
            <Header/>

            <div className="section section-strava-api container">
                <h1>The Strava API</h1>

                <p>Strava athletes upload millions of activities every day. Our open API and this rich data set yield
                    diverse opportunities for developers, from creating new hardware to augmenting the Strava
                    experience.</p>
                <p>The Strava V3 API is a publicly available interface that allows developers to access Strava data. The
                    interface is stable and used by the Strava mobile apps. However, we occasionally make major changes
                    to improve performance and enhance our features (<a href="/docs/changelog">see the changelog for
                        more details</a>).</p>
                <p>Strava reserves the right to revoke your API Token if you violate the <a
                    href="https://www.strava.com/legal/api">API Agreement</a>, including but not limited to, uses that
                    enable virtual races or competitions and uses that replicate Strava sites, services or products.</p>

                <div className="row cta-row">
                    <div className="col">
                        <a href="/docs/getting-started" className="btn btn-primary btn-block">
                            Getting Started Guide
                        </a>
                    </div>

                    <div className="col">
                        <a href="/docs/reference" className="btn btn-secondary btn-block">
                            API Documentation
                        </a>
                    </div>

                    <div className="col">
                        <a href="https://strava.com/settings/api" className="btn btn-secondary btn-block">
                            Create &amp; Manage Your App
                        </a>
                    </div>

                    <div className="col">
                        <a href="/playground" className="btn btn-secondary btn-block">
                            Explore the API Playground
                        </a>
                    </div>

                    <div className="col">
                        <a href="https://developers.strava.com/docs/#client-code"
                           className="btn btn-secondary btn-block">Libraries</a>
                    </div>
                </div>
            </div>

            <div className="section section-strava-apps container text-center">
                <div className="hero">
                    <div className="jumbotron">
                        <h2>Strava Apps</h2>
                        <p>
                            Thousands of amazing developers from all over the world power their apps with Strava data.
                            Far more athletes are using those apps to augment their Strava experience. There’s an app
                            for everyone, from those that let you dive deep into the nerdiest of performance data, to an
                            app that helps you make a friend in your neighborhood who runs the same pace as you.
                        </p>
                        <a href="https://www.strava.com/apps" className="btn btn-secondary">View the App Directory</a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}