import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import remarkAttr from "remark-attr"
import rehypeAttr from "rehype-attr";
import DocsPanel from "./DocsPanel";

interface DocsPanelType {
    content: string;
}

export default function DocsRow({content}: DocsPanelType) {
    return (
        <ReactMarkdown
            className="row"
            remarkPlugins={[
                remarkGfm,
                remarkDirective,
                remarkDirectiveRehype
            ]}
            rehypePlugins={[
                rehypeAttr
            ]}
            components={{
                'docs-panel': DocsPanel
            }}
        >
            {content}
        </ReactMarkdown>
    )
}
