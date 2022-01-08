import React from "react";
import FooterContent from "./FooterContent";

export default function Footer() {
    return (
        <footer className="section footer">
            <div className="container">
                <div className="row">
                    <FooterContent
                        title={FOOTER_TITLE_1}
                        description={FOOTER_DESCRIPTION_1}
                        links={FOOTER_LIST_LINKS_1}
                    />
                    <FooterContent
                        title={FOOTER_TITLE_2}
                        description={FOOTER_DESCRIPTION_2}
                        links={FOOTER_LIST_LINKS_2}
                    />
                    <FooterContent
                        title={FOOTER_TITLE_3}
                        description={FOOTER_DESCRIPTION_3}
                        links={FOOTER_LIST_LINKS_3}
                    />
                </div>
            </div>
        </footer>
    );
}

const FOOTER_TITLE_1 = 'Agreement & Brand Guidelines';
const FOOTER_DESCRIPTION_1 = `To use the Strava API, you need to comply with the Strava API Agreement and our Brand Guidelines. Mandatory logos, linking, and attribution rules can also be found in the guidelines.`;
const FOOTER_LIST_LINKS_1 = [
    {
        href: 'https://www.strava.com/legal/api',
        text: 'Strava API Agreement',
        isRoute: false
    },
    {
        href: '/guidelines',
        text: 'Strava Brand Guidelines',
        isRoute: true
    }
];

const FOOTER_TITLE_2 = 'Strava Engineering';
const FOOTER_DESCRIPTION_2 = `Learn more about the Strava Engineering Team and all the cool things we're working on.`;
const FOOTER_LIST_LINKS_2 = [
    {
        href: 'https://medium.com/strava-engineering',
        text: 'Strava Engineering Blog',
        isRoute: false
    },
    {
        href: 'https://boards.greenhouse.io/strava',
        text: 'Careers at Strava',
        isRoute: false
    }
];

const FOOTER_TITLE_3 = 'Mailing List';
const FOOTER_DESCRIPTION_3 = `Join the Strava API discussion group to ask questions and hear from other API developers. Remember, <b>never</b> share access tokens, refresh tokens, authorization codes, or your client secret in a public forum.`;
const FOOTER_LIST_LINKS_3 = [
    {
        href: 'https://groups.google.com/forum/#!forum/strava-api',
        text: 'Developer Group',
        isRoute: false
    }
];
