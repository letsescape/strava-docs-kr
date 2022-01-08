import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Button from "../component/Button";

export default function Intro() {
    return (
        <>
            <Header/>

            <section className="section section-strava-api container">
                <h1>{INTRO_TITLE}</h1>

                {/*TODO: html render*/}
                {INTRO_DESCRIPTIONS.map(text => (
                    <p
                        key={text}
                        dangerouslySetInnerHTML={{__html: text}}
                    />
                ))}

                <div className="row cta-row">
                    {INTRO_LINKS.map((link, i) => (
                        <div
                            key={i}
                            className="col"
                        >
                            <Button {...link}/>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section section-strava-apps container text-center">
                <div className="hero">
                    <div className="jumbotron">
                        <h2>{BANNER_TITLE}</h2>
                        <p>{BANNER_DESCRIPTION}</p>
                        <Button {...BANNER_LINK}/>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

const INTRO_TITLE = 'The Strava API';
const INTRO_DESCRIPTIONS = [
    'Strava athletes upload millions of activities every day. Our open API and this rich data set yield diverse opportunities for developers, from creating new hardware to augmenting the Strava experience.',
    `he Strava V3 API is a publicly available interface that allows developers to access Strava data. The interface is stable and used by the Strava mobile apps. However, we occasionally make major changes to improve performance and enhance our features (<a href="/docs/changelog">see the changelog for more details</a>).`,
    `Strava reserves the right to revoke your API Token if you violate the <a href="https://www.strava.com/legal/api">API Agreement</a>, including but not limited to, uses that enable virtual races or competitions and uses that replicate Strava sites, services or products.`
];
const INTRO_LINKS = [
    {
        isLink: true,
        href: '/docs/getting-started',
        isRoute: true,
        theme: 'primary',
        style: 'block',
        text: 'Getting Started Guide'
    },
    {
        isLink: true,
        href: '/docs/reference',
        isRoute: true,
        theme: 'secondary',
        style: 'block',
        text: 'API Documentation'
    },
    {
        isLink: true,
        href: 'https://strava.com/settings/api',
        isRoute: false,
        theme: 'secondary',
        style: 'block',
        text: 'Create & Manage Your App'
    },
    {
        isLink: true,
        href: '/playground',
        isRoute: true,
        theme: 'secondary',
        style: 'block',
        text: 'Explore the API Playground'
    },
    {
        isLink: true,
        href: 'https://developers.strava.com/docs/#client-code',
        isRoute: false,
        theme: 'secondary',
        style: 'block',
        text: 'Libraries'
    },
]

const BANNER_TITLE = 'Strava Apps';
const BANNER_DESCRIPTION = `Thousands of amazing developers from all over the world power their apps with Strava data. Far more athletes are using those apps to augment their Strava experience. There’s an app for everyone, from those that let you dive deep into the nerdiest of performance data, to an app that helps you make a friend in your neighborhood who runs the same pace as you.`;
const BANNER_LINK = {
    isLink: true,
    href: 'https://www.strava.com/apps',
    isRoute: false,
    theme: 'secondary',
    text: 'View the App Directory'
};