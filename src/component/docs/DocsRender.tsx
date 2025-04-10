import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import rehypeAttr from "rehype-attr";
import rehypeRaw from "rehype-raw";
// @ts-ignore
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// @ts-ignore
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import DocsPanel from "./DocsPanel";
import DocsHttpMethod from "./DocsHttpMethod";
import DocsTable from "./DocsTable";
import DocsTableRow from "./DocsTableRow";
import DocsComment from "./DocsComment";

interface Props {
  content: string;
}

function DocsRender({content}: Props) {
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

export default DocsRender;

const REMARK_PLUGINS = [
  remarkGfm,
  remarkDirective,
  remarkDirectiveRehype
];

const REHYPE_PLUGINS = [
  rehypeRaw,
  [rehypeAttr, {properties: 'attr'}]
];

const DOCS_COMPONENTS = {
  p: ({children}: any) => {
    const check = typeof children[0] === 'string';

    if (check) {
      return <p>{children}</p>
    } else {
      return children;
    }
  },
  code: ({node, inline, className, children, ...props}: any) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={dark}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  'docs-panel': DocsPanel,
  'docs-http-method': DocsHttpMethod,
  'docs-table': DocsTable,
  'docs-table-row': DocsTableRow,
  'docs-comment': DocsComment,
};