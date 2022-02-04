interface DocsHttpMethodType {
    method: string;
    url: string;
}

export default function DocsHttpMethod({method, url}: DocsHttpMethodType) {
    return (
        <div className="http">
            <pre className={`http-method http-method-${method}`}>
                <code>{method}</code>
            </pre>
            <pre className="prettyprint language-html prettyprinted http-request-line">
                <code>
                    <span className="pln">{url}</span>
                </code>
            </pre>
        </div>
    );
}