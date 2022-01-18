interface DocsPanelType {
    id: string;
    children: string;
    target?: string;
}

export default function DocsPanel({id, children, target}: DocsPanelType) {
    return (
        <div className={`col-md-6 ${id}-pane`}>
            {!target && children}

            { target && (
                <article id={target}>
                    {children}
                </article>
            )}
        </div>
    )
}