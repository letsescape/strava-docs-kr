interface DocsPanelType {
    id: string;
    children: any;
}

export default function DocsPanel({id, children}: DocsPanelType) {
    return (
        <div className={`col-md-6 ${id}-pane`}>
            {children}
        </div>
    )
}