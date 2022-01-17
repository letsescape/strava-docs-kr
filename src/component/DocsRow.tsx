import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import rehypeAttr from "rehype-attr";
import rehypeRaw from "rehype-raw";
import DocsPanel from "./DocsPanel";

interface DocsPanelType {
    content: string;
}

export default function DocsRow({content}: DocsPanelType) {
    return (
        <ReactMarkdown
            children={content}
            className="row"
            remarkPlugins={[
                remarkGfm,
                remarkDirective,
                remarkDirectiveRehype
            ]}
            rehypePlugins={[
                rehypeRaw,
                [rehypeAttr, { properties: 'attr' }]
            ]}
            components={{
                'docs-panel': DocsPanel
            }}
        />
    )
}
