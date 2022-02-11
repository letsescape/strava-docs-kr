import guideImg from "../images/guide";

// TODO:
export default function Guide() {
    return (
        <main className="container">
            <section>
                <header>
                    <h2 className="getting-started-with-the-strava-api mt-3">Getting Started with the Strava API</h2>
                    <p className="pt-4">Welcome to the Strava API! This is a brief overview of how to use our API.
                        Anyone who breaks a sweat is an athlete, so we refer to our users as athletes.</p>

                    <p className="pt-4"><strong>🌈 Table of Contents</strong></p>
                    <ol className="list-unstyled pb-4">
                        <li>A. <a href="#basic">Basic info about the API</a></li>
                        <li>B. <a href="#account">How to create an account</a></li>
                        <li>C. <a href="#curl">How to make a cURL request</a></li>
                        <li>D. <a href="#oauth">How to authenticate with OAuth 2.0</a></li>
                        <li>E. <a href="#swagger">How to use the Swagger Playground</a></li>
                        <li>F. <a href="#webhooks">Why Do I Need Webhooks?</a></li>
                        <li>G. <a href="#getsupport">How to Get Support</a></li>
                    </ol>
                    <hr className="pt-4"/>
                </header>

                <article>
                    <h6 id="basic">🚴🏿&zwj;♀️ A. Basic info about the API 🏃🏿&zwj;♀️ 🚣</h6>
                    <p>
                        The Strava REST API includes data on athletes, segments, routes, clubs, and gear. It is free to
                        use. The Strava API does not allow you to get data for all Strava public athletes, as you can
                        see on our website.<br/>
                        To get data on athletes, you will have to make an application and request that athletes sign in
                        with Strava, and grant your application certain permissions using OAuth 2.0. You can get data on
                        yourself without authentication for testing purposes.<br/>
                        Strava API usage is limited on a per-application basis using both a 15-minute and daily request
                        limit. The default rate limit allows 100 requests every 15 minutes, with up to 1,000 requests
                        per day.
                    </p>

                    <p><strong>- Quick Links</strong></p>
                    <ul>
                        <li><a href="https://developers.strava.com/docs">Rate limits and pagination</a></li>
                        <li><a href="https://developers.strava.com/docs/uploads">Uploading files</a></li>
                        <li><a href="https://www.strava.com/legal/api">Terms of Service</a></li>
                        <li><a href="https://developers.strava.com/guidelines">Brand Guidelines</a></li>
                    </ul>
                    <p><strong>- Examples of What to Build with the Strava API</strong></p>
                    <ul className="pb-4">
                        <li><a href="https://printmyroute.xyz">Create a print of your route</a></li>
                        <li><a href="https://klimat.app">Add weather for your activities</a></li>
                        <li><a href="https://developers.strava.com/docs/webhookexample">Listen for new Strava activities
                            using Strava webhooks</a></li>
                        <li><a href="https://veloviewer.com">Measure how you are performing in your athletic
                            activities</a></li>
                    </ul>
                    <hr className="pt-4"/>
                </article>

                <article>
                    <h6 id="account">🏄&zwj;♀️ B. How to Create an account 🧗🏿&zwj;♂️</h6>
                    <p><strong>To start developing with the Strava API, you will need to make an application</strong>
                    </p>
                    <ol>
                        <li>If you have not already, go to <a
                            href="https://www.strava.com/register">https://www.strava.com/register</a> and sign up for a
                            Strava account.
                        </li>
                        <li>After you are logged in, go to <a
                            href="https://www.strava.com/settings/api">https://www.strava.com/settings/api</a> and
                            create an app.
                        </li>
                        <li>You should see the “My API Application” page now. Here is what everything means:

                            <ul>
                                <li>Category: The category you chose for your application</li>
                                <li>Club: Will show if you have a club associated with your application</li>
                                <li>Client ID: Your application ID</li>
                                <li>Client Secret: Your client secret (please keep this confidential)</li>
                                <li>Authorization token: Your authorization token which will change every six hours
                                    (please keep this confidential)
                                </li>
                                <li>Your Refresh token: The token you will use to get a new authorization token (please
                                    keep this confidential)
                                </li>
                                <li>Rate limits: Your current rate limit</li>
                                <li>Authorization Callback Domain: When building your app, change “Authorization
                                    Callback Domain” to localhost or any domain. When taking your app live, change
                                    “Authorization Callback Domain” to a real domain.
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <p>
                        <img src={guideImg.img1} className="p-3"/>
                        <img src={guideImg.img2} className="p-3"/>
                        <br/>
                    </p>
                    <hr className="pt-4"/>
                </article>

                <article>
                    <h6 id="curl">🏊&zwj;♀️ C. How to Make a cURL request 🏂</h6>
                    <ol>
                        <li>
                            <p>
                                Let’s make a cURL request against the Strava API. cUrl is a command line tool and is <a
                                href="https://flaviocopes.com/http-curl">available on all platforms</a>. For our first
                                request, we are going to get our profile information which is this call: <a
                                href="https://developers.strava.com/docs/reference/#api-Athletes-getLoggedInAthlete">https://developers.strava.com/docs/reference/#api-Athletes-getLoggedInAthlete</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                Access tokens are required for all requests, and can be included by adding
                                “Authorization: Bearer {`#{access_token}”`} as a header.
                            </p>
                        </li>
                        <li>
                            <p>
                                To get your access token, go to <a
                                href="https://www.strava.com/settings/api">https://www.strava.com/settings/api</a>.
                                Access tokens expire every six hours.
                            </p>
                        </li>
                        <li>
                            <p>Make a cURL request:</p>
                            <pre>
                                <code>curl -X GET \ https://www.strava.com/api/v3/athlete \ -H 'Authorization: Bearer YOURACCESSTOKEN'</code>
                            </pre>
                        </li>
                        <li>
                            <p>
                                If you are using <a href="https://www.getpostman.com">Postman</a>, it will look like
                                this:
                                <br/>
                                <img src={guideImg.img3} className="p-4"/>
                            </p>
                        </li>
                    </ol>
                    <hr className="pt-4"/>
                </article>

                <article>
                    <h6 id="oauth">🧗🏿&zwj;♀️ D. How to Authenticate 🏊</h6>
                    <p>
                        As you may have already noticed, we require authentication via OAuth 2.0 in order to request
                        data
                        about any athlete. OAuth 2.0 allows developers to interact with Strava athletes without having
                        to store sensitive information. View our full documentation <a
                        href="https://developers.strava.com/docs/authentication">here</a>.
                        <br/>
                        When OAuth is initiated, the athlete is prompted by the application to log in to the Strava
                        website and give consent to the requesting application. This is what your athlete will see:
                    </p>
                    <p><img src={guideImg.img4} className="pt-4"/></p>
                    <p>After the athlete accepts or rejects the authorization request, Strava redirects the athlete to a
                        URL specified by the application. If the athlete authorized the application, the URL query
                        string will include an authorization code and the scope accepted by the athlete. Please check to
                        see that the athlete has accepted all of your scopes. The application must complete the
                        authentication process by exchanging the authorization code for a refresh token and short-lived
                        access token.</p>
                    <p>Confused? Here is a Graph:</p>
                    <p><img src={guideImg.img5} className="pt-4"/></p>
                    <p><strong>For demonstration purposes only, here is how to reproduce the graph above with
                        cURL:</strong></p>
                    <ol>
                        <li>Go to <a
                            href="https://www.strava.com/settings/api">https://www.strava.com/settings/api</a> and copy
                            your Client ID
                        </li>
                        <li>
                            Paste your Client ID into this
                            URL: <code>http://www.strava.com/oauth/authorize?client_id=[REPLACE_WITH_YOUR_CLIENT_ID]&amp;response_type=code&amp;redirect_uri=http://localhost/exchange_token&amp;approval_prompt=force&amp;scope=read</code>
                        </li>
                        <li>Go to a browser</li>
                        <li>Paste the URL you edited into the browser window (step 1 and 2 from the graph)</li>
                        <li>Hit enter</li>
                        <li>
                            When you see the authorization page, click “Authorize” (step 3a from the graph)
                            <img src={guideImg.img6} className="p-4"/>
                        </li>
                        <li>After you click “Authorize,” you should see something like, “this site can’t be reached”
                        </li>
                        <li>Stay on that page and look at the URL</li>
                        <li>
                            The URL will show the authorization code and scope accepted by the athlete (step 5 from the
                            graph)
                            <img src={guideImg.img7} className="p-4"/>
                        </li>
                        <li>Copy the authorization code</li>
                        <li>
                            <p>
                                Make a cURL request to exchange the authorization code and scope for a refresh token,
                                access token, and access token expiration date (step 7a from the graph). Replace the
                                client_secret and code. The response should include the refresh token, access token, and
                                access token expiration date (step 8 from the graph).
                            </p>
                            <p>Sample cURL request:</p>
                        </li>
                    </ol>

                    <p className="pl-4">
                        curl -X POST https://www.strava.com/oauth/token \ <br/>
                        -F client_id=YOURCLIENTID \ <br/>
                        -F client_secret=YOURCLIENTSECRET \ <br/>
                        -F code=AUTHORIZATIONCODE \ <br/>
                        -F grant_type=authorization_code
                    </p>
                    <p>If you are using <a href="https://www.getpostman.com">Postman</a>, here is a sample request:</p>
                    <p>

                        <img src={guideImg.img8} className="p-4"/>
                        Sample response:
                    </p>
                    <pre><code>
                        {`{
                        "token_type": "Bearer",
                        "expires_at": 1562908002,
                        "expires_in": 21600,
                        "refresh_token": "REFRESHTOKEN",
                        "access_token": "ACCESSTOKEN",
                        "athlete": {
                        "id": 123456,
                        "username": "MeowTheCat",
                        "resource_state": 2,
                        "firstname": "Meow",
                        "lastname": "TheCat",
                        "city": "",
                        "state": "",
                        "country": null,
                        ...
                    }
                    }`}</code>
                    </pre>
                    <p>
                        For more information on authentication, click <a
                        href="https://developers.strava.com/docs/authentication">here</a>.
                    </p>
                    <hr className="pt-4"/>
                </article>

                <article>
                    <h6 id="swagger">
                        🏊🏿&zwj;♀️ E. How to Use the Swagger Playground 🏄
                    </h6>
                    <ol>
                        <li>
                            The Swagger Playground is the easiest way to familiarize yourself with the Strava API by
                            submitting HTTP requests and observing the responses before you write any client code. It
                            will show what a response will look like with different endpoints depending on the
                            authorization scope you receive from your athletes. To use the Playground, you will have to
                            change your “Authorization Callback Domain” to developers.strava.com.
                            <br/>
                            <img src={guideImg.img9} className="p-4"/>
                        </li>
                        <li>
                            Go to the Playground, <a
                            href="https://developers.strava.com/playground">https://developers.strava.com/playground</a>,
                            and click the green “Authorize” button on the right.
                        </li>
                        <li>
                            You will use your Client ID and Client Secret from <a
                            href="https://www.strava.com/settings/api">https://www.strava.com/settings/api</a>.
                            <br/>
                            <img src={guideImg.img10} className="p-4"/>
                        </li>
                    </ol>
                    <hr className="pt-4"/>
                </article>

                <article>
                    <h6 id="webhooks">🏃🏿&zwj;♀️ F. Why Do I Need Webhooks? 🚣</h6>
                    <ul>
                        <li>
                            Per our API terms, you need to implement webhooks to know when an athlete has deauthorized
                            your API application
                        </li>
                        <li>
                            To avoid hitting rate limits

                            <ul>
                                <li>
                                    Instead of polling to see if athletes have new activities, you can subscribe to
                                    activity updates
                                </li>
                            </ul>
                        </li>
                        <li>To know if activities have changed from public to private</li>
                        <li>
                            To subscribe to webhooks, please follow the instructions <a
                            href="https://developers.strava.com/docs/webhooks">here</a>
                        </li>
                    </ul>
                    <hr className="pt-4"/>
                </article>

                <article>
                    <h6 id="getsupport">⛵️ G. How to Get Support 🚴🏿&zwj;♀️</h6>
                    <p><strong>Before emailing, please check our documentation first:</strong></p>
                    <ul>
                        <li>
                            Authentication: <a
                            href="https://developers.strava.com/docs/authentication">https://developers.strava.com/docs/authentication</a>
                        </li>
                        <li>
                            Webhooks: <a
                            href="https://developers.strava.com/docs/webhooks">https://developers.strava.com/docs/webhooks</a>
                        </li>
                        <li>
                            API docs: <a
                            href="https://developers.strava.com/docs/reference">https://developers.strava.com/docs/reference</a>
                        </li>
                        <li>
                            Basic info: <a
                            href="https://developers.strava.com/docs">https://developers.strava.com/docs</a>
                        </li>
                    </ul>
                    <p>
                        If you have questions, please check our <a
                        href="https://groups.google.com/forum/#!forum/strava-api">developer forum</a>.
                        Remember, <strong>never</strong> share access tokens, refresh tokens, authorization codes, or
                        your client secret in a public forum.
                    </p>
                </article>
            </section>
        </main>
    )
}