import ReactMarkdown from "react-markdown";

export interface DocsRowType {
    content: string
}

interface MDProps {
    node: any;
    inline: any;
    className: any;
    children: any;
}

export default function DocsRow({content}: DocsRowType) {
    return (
        <ReactMarkdown
            children={content}
            components={{
                code({node, inline, className, children, ...props}: MDProps) {
                    console.log(props);
                    const match = /language-(\w+)/.exec(className || '');
                    console.log(match);
                    return !inline && match ? (
                        <div>
                            cc
                            {String(children).replace(/\n$/, '')}
                        </div>
                    ) : (
                        <code className={className} {...props}>
                            asd
                            {children}
                        </code>
                    )
                }
            }}

        />
    )

    // return (
    //     <div className="row" dangerouslySetInnerHTML={{__html: content}}>
    //         {/*{content}*/}
    //         {/*<div className="col-md-6 left-pane">*/}
    //         {/*    <div id="project">*/}
    //         {/*        <h1>Strava API v3</h1>*/}
    //         {/*    </div>*/}
    //         {/*    <header id="header">*/}
    //         {/*        <div id="api-_">*/}
    //         {/*            <h2 id="welcome-to-apidoc">API and SDK Reference</h2>*/}
    //         {/*            <div className="app-desc">*/}
    //         {/*                You can find general information about the API <a href="/docs">here</a>.*/}
    //         {/*                All requests to the Strava API require <a href="/docs/authentication">authentication</a>.*/}
    //         {/*                We have a few standalone pages with additional information about our <a*/}
    //         {/*                href="/docs/webhooks">webhooks</a>, <a href="/docs/uploads">activity uploads</a> and <a*/}
    //         {/*                href="/docs/rate-limits">rate limits</a>. <br/> <br/> <strong>New to the Strava API? View*/}
    //         {/*                our <a href="/docs/getting-started">Getting Started Guide</a>.</strong> <br/>*/}
    //         {/*            </div>*/}
    //         {/*            <hr/>*/}
    //         {/*            <p className="marked">*/}
    //         {/*                <p>The <a href="https://developers.strava.com/playground">Swagger*/}
    //         {/*                    Playground</a> is the easiest way to familiarize yourself with the Strava API by*/}
    //         {/*                    submitting HTTP requests and observing the responses before you write any client code.*/}
    //         {/*                    It will show what a response will look like with different endpoints depending on the*/}
    //         {/*                    authorization scope you receive from your athletes. To use the Playground, go to <a*/}
    //         {/*                        href="https://www.strava.com/settings/api">https://www.strava.com/settings/api</a> and*/}
    //         {/*                    change your “Authorization Callback Domain” to developers.strava.com. Please note, we*/}
    //         {/*                    only support Swagger 2.0. There is a known issue where you can only select one scope at*/}
    //         {/*                    a time. For more information, please check the section “client code” at <a*/}
    //         {/*                        href="https://developers.strava.com/docs">https://developers.strava.com/docs</a>.*/}
    //         {/*                </p>*/}
    //         {/*            </p>*/}
    //         {/*        </div>*/}
    //         {/*    </header>*/}
    //         {/*</div>*/}
    //         {/*<div className="col-md-6 right-pane"></div>*/}
    //     </div>
    // )
}