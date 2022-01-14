import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";

interface DocsPanelType {
    position: string;
    content: string;
}

export default function DocsPanel({position, content}: DocsPanelType) {
    return (
        <ReactMarkdown
            className={`col-md-6 ${position}-pane`}
            remarkPlugins={[
                remarkGfm,
                remarkDirective,
                remarkDirectiveRehype
            ]}
        >
            {content}
        </ReactMarkdown>
    )
}
