import DocsRender from "./DocsRender";

interface Props {
  contents: string[]
}

function DocsContent({contents}: Props) {
  return (
    <div id="content">
      <div className="container-fluid">
        {contents.map((content, index) => (
          <DocsRender
            key={index}
            content={content}
          />
        ))}
      </div>
    </div>
  )
}

export default DocsContent;