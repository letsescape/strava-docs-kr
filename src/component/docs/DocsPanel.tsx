import React from "react";
import DocsTabs from "./DocsTabs";

interface Props {
  id: string;
  children: string;
  target?: string;
  node: any;
}

function DocsPanel({id, children, target, node}: Props) {
  const tabs = node.children

  return (
    <div className={`col-md-6 ${id}-pane`}>
      {id === 'left' && (
        <article id={target || ''}>
          {children}
        </article>
      )}

      {id === 'right' && (
        <DocsTabs tabs={tabs} children={children}/>
      )}
    </div>
  )
}

export default DocsPanel;