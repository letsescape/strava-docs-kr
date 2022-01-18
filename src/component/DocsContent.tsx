import DocsRow from "./DocsRow";

export default function DocsContent({contents}: {contents: string[]}) {
    return (
        <div id="content">
            <div className="container-fluid">
                { contents.map((content, index) => (
                    <DocsRow
                        key={index}
                        content={content}
                    />
                ))}
            </div>
        </div>
    )
}