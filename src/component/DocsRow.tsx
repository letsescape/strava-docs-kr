import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkFootnotes from "remark-footnotes";
import remarkParse from "remark-parse";
import remarkAttr from "remark-attr";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeAttr from "rehype-attr";
import remarkAlign from "remark-align";
import DocsPanel from "./DocsPanel";

interface DocsPanelType {
    content: string;
}

export default function DocsRow({content}: DocsPanelType) {
    return (
        <ReactMarkdown
            children={content}
            className="row"
            skipHtml={false}
            remarkPlugins={[
                remarkParse,
                // rehypeStringify,
                // remarkRehype,
                remarkGfm,
                remarkDirective,
                remarkDirectiveRehype,
                remarkAttr,
                // remarkAlign
            ]}
            rehypePlugins={[
                rehypeAttr
            ]}
            components={{
                'docs-panel': DocsPanel
            }}
        />
    )
}
