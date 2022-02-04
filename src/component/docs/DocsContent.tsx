import DocsRender from "./DocsRender";

export default function DocsContent({contents}: {contents: string[]}) {
    return (
        <div id="content">
            <div className="container-fluid">
                { contents.map((content, index) => (
                    <DocsRender
                        key={index}
                        content={content}
                    />
                ))}
            </div>
        </div>
    )
}