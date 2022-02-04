import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import rehypeAttr from "rehype-attr";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";
import DocsPanel from "./DocsPanel";
import DocsHttpMethod from "./DocsHttpMethod";
import DocsTable from "./DocsTable";
import DocsTableRow from "./DocsTableRow";

interface DocsPanelType {
    content: string;
}

export default function DocsRender({content}: DocsPanelType) {
    return (
        <ReactMarkdown
            children={content}
            className="row"
            remarkPlugins={REMARK_PLUGINS}
            rehypePlugins={REHYPE_PLUGINS}
            components={DOCS_COMPONENTS}
            unwrapDisallowed={true}
        />
    )
}

const REMARK_PLUGINS = [
    remarkGfm,
    remarkDirective,
    remarkDirectiveRehype
];

const REHYPE_PLUGINS = [
    rehypeRaw,
    [rehypeAttr, { properties: 'attr' }]
];

interface pType {
    children: any[];
}

const DOCS_COMPONENTS = {
    p: ({children}: pType) => {
        const check = typeof children[0] === 'string';

        if (check) {
            return <p>{children}</p>
        } else {
            return children;
        }
    },
    'docs-panel': DocsPanel,
    'docs-http-method': DocsHttpMethod,
    'docs-table': DocsTable,
    'docs-table-row': DocsTableRow
};